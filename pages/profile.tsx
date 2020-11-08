import { faHandHoldingUsd, faList } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Avatar, MainInfo } from '@pagesComponents/profile';
import { BaseLayout } from "@/components/layouts";
import { Input } from '@/components/common';
import { Category, categories } from '@/types';
import { withAuth } from '@/services/auth0';

export const getServerSideProps = withAuth();

export interface MainInfoStateForm {
  instagramAccount: string,
  category: Category | null,
  pricePerStory: string,
  pricePerPost: string,
}

export default function Profile() {
  const updateInfo = (data: MainInfoStateForm) => {
    console.log(data);
  } 
  
  return (
    <BaseLayout className="profile">
      <section className="fabrx-section bg-white mt-5">
        <div className="container">
          <div className="row align-items-center">
            <Avatar />
            <MainInfo updateInfo={updateInfo}/>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
};
