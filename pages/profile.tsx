import { Instagram, MainInfo } from '@pagesComponents/profile';
import { BaseLayout } from "@/components/layouts";
import { Category, User } from '@/types';
import { withAuth } from '@/services/auth0';
import { Redirect } from '@/components/common';

export interface MainInfoStateForm {
  instagramAccount: string,
  category: Category | null,
  pricePerStory: string,
  pricePerPost: string,
}

interface ProfileProps {
  user: User,
  token: string,
}

export const getServerSideProps = withAuth();

export default function Profile({ user, token }: ProfileProps) {
  const updateInfo = (data: MainInfoStateForm) => {
    console.log(data);
  } 

  if (!user.user_metadata) return <Redirect url="/first_enter" />

  return (
    <BaseLayout className="profile">
      <section className="fabrx-section bg-white mt-5">
        <div className="container">
          <div className="row align-items-center">
            <Instagram 
              instaUser={user.user_metadata.user} 
              nickname={user.nickname}
            />
            <MainInfo 
              updateInfo={updateInfo} 
              user={user} 
            />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
};
