import { toast } from 'react-toastify';

import { Instagram, MainInfo } from '@/components/pages/instagramProfile';
import { BaseLayout } from "@/components/layouts";
import {Category, InstagramMetadata, InstaUser, Metadata, User} from '@/types';
import { withAuth } from '@/services/auth0';
import { Redirect } from '@/components/common';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';
import {FirstInstagram } from '@pagesComponents/firstEnter/FirstInstagram';

export interface MainInfoStateForm {
  instagramAccount: string,
  category: Category | null,
  pricePerStory: string,
  pricePerPost: string,
  desc: string,
}

interface ProfileProps {
  user: User,
  token: string,
}

export const getServerSideProps = withAuth();

export default function Profile({ user, token }: ProfileProps) {
  const [checkAccount, checkAccountState] = useCheckAccount(token);
  const [updateMetadata, updateMetadataState] = useUpdateMetadata(token);
  
  const updateInfo = async (formData: MainInfoStateForm) => {
    const { category, desc, pricePerStory, pricePerPost, instagramAccount } = formData;
    try {
      let instaUser = user.user_metadata?.instagram?.user as InstaUser;
      if (instagramAccount !== user.user_metadata?.instagram?.user.username) {
        instaUser = await checkAccount(instagramAccount);
      }
      await updateMetadata({
        userId: user.sub,
        metadata: {
          instagram: {
            user: instaUser,
            category: category as Category,
            desc,
            price: {
              story: Number(pricePerStory),
              post: Number(pricePerPost),
            },
          }
        }
      });
      
      if (typeof window !== 'undefined') {
        toast('Data updated', {type: 'success'})
        window.location.href = '/api/v1/login??redirectTo=/instagram_profile&prompt=true';
      }
    } catch (error) {
      toast(error, { type: 'error' });
    }
  }
  
  const finishHandler = async (instaUserData?: InstagramMetadata) => {
    try {
      const data: {userId: string, metadata: Metadata } = {
        userId: user.sub,
        metadata: {
          instagram: instaUserData,
        }
      };
  
      await updateMetadata(data);
      if (typeof window !== 'undefined') {
        toast('Data updated', {type: 'success'})
        window.location.href = '/api/v1/login?redirectTo=/instagram_profile';
      }
    } catch (error) {
      toast(error, { type: 'error' });
    }
  }
  
  if (!user.user_metadata?.contactInfo) return <Redirect url="/first_enter" />;

  return (
    <BaseLayout className="profile">
      <section className="fabrx-section bg-white mt-0 mt-md-3">
        <div className="container">
          <div className="row align-items-flex-start position-relative p-3 p-md-0">
            {
              user.user_metadata?.instagram
                ? (
                  <>
                    <Instagram
                      instaUser={user.user_metadata?.instagram?.user as InstaUser}
                    />
                    <img
                      src="./assets/images/vectors/vector-13.svg"
                      className="position-absolute"
                      style={{ opacity: 0.15, top: '15%' }}
                    />
                    <MainInfo
                      updateInfo={updateInfo}
                      user={user}
                      loading={checkAccountState.loading || updateMetadataState.loading}
                    />
                  </>
                ) : (
                  <FirstInstagram
                    checkAccount={checkAccount}
                    checkAccountLoading={checkAccountState.loading}
                    finishHandler={finishHandler}
                    updateMetadataLoading={updateMetadataState.loading}
                  />
                )
            }
            
          </div>
        </div>
      </section>
    </BaseLayout>
  )
};
