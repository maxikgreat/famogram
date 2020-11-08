import { MainInfo } from '@pagesComponents/profile';
import { BaseLayout } from "@/components/layouts";
import { Category, categories } from '@/types';
import { withAuth } from '@/services/auth0';
import { User } from '@/store/user/types';

export interface MainInfoStateForm {
  instagramAccount: string,
  category: Category | null,
  pricePerStory: string,
  pricePerPost: string,
}

interface ProfileProps {
  user: User,
}

export const getServerSideProps = withAuth();

export default function Profile({ user }: ProfileProps) {
  const updateInfo = (data: MainInfoStateForm) => {
    console.log(data);
  } 

  return (
    <BaseLayout className="profile">
      <section className="fabrx-section bg-white mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="hero-caption pr-0 pr-md-5">
                <h2 className="font-weight-bold">Hi, {user.nickname}</h2>
                <p className="h6 pr-0 pr-md-5">If your company requires custom features and premuim support, we offer solutions to startups and big corporations.</p>
              </div>
            </div>
            <MainInfo updateInfo={updateInfo} user={user} />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
};
