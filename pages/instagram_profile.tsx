import { toast } from 'react-toastify';

import { Instagram, MainInfo } from '@/components/pages/instagramProfile';
import { BaseLayout } from "@/components/layouts";
import { Category, InstaUser, User } from '@/types';
import { withAuth } from '@/services/auth0';
import { Redirect } from '@/components/common';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';

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
      })
      if (typeof window !== 'undefined') window.location.href = '/api/v1/login';
    } catch (error) {
      toast(error, { type: 'error' });
    }
  } 

  if (!user.user_metadata?.instagram) return <Redirect url="/first_enter" />

  return (
    <BaseLayout className="profile">
      <section className="fabrx-section bg-white mt-5">
        <div className="container">
          <div className="row align-items-flex-start position-relative">
            <Instagram 
              instaUser={user.user_metadata.instagram.user as InstaUser} 
            />
            <img 
              src="./assets/images/vectors/vector-13.svg" 
              className="position-absolute" 
              style={{ opacity: 0.15 }}
            />
            <MainInfo 
              updateInfo={updateInfo} 
              user={user}
              loading={checkAccountState.loading || updateMetadataState.loading}
            />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
};
