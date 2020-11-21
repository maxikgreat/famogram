import { toast } from 'react-toastify';

import { Instagram, MainInfo } from '@pagesComponents/profile';
import { BaseLayout } from "@/components/layouts";
import { Category, InstaUser, Metadata, User } from '@/types';
import { withAuth } from '@/services/auth0';
import { Redirect } from '@/components/common';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';
import { normalizeData } from '@/helpers';

export interface MainInfoStateForm {
  instagramAccount: string,
  category: Category | null,
  pricePerStory: string,
  pricePerPost: string,
  desc: string,
  contactEmail: string,
  whatsApp: string,
  facebook: string,
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
    try {
      let instaUser = user.user_metadata?.user as InstaUser;
      if (formData.instagramAccount !== user.user_metadata?.user.username) {
        instaUser = await checkAccount(formData.instagramAccount);
      }
      const metadata = normalizeData(instaUser, formData);
      await updateMetadata({ userId: user.sub, metadata });
      if (typeof window !== 'undefined') window.location.href = '/api/v1/login';
    } catch (error) {
      toast(error, { type: 'error' });
    }
  } 

  if (!user.user_metadata) return <Redirect url="/first_enter" />

  return (
    <BaseLayout className="profile">
      <section className="fabrx-section bg-white mt-5">
        <div className="container">
          <div className="row align-items-flex-start">
            <Instagram 
              instaUser={user.user_metadata.user} 
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
