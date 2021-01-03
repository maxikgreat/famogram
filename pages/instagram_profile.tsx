import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver }  from '@hookform/resolvers/yup';
import Router from 'next/router';
import moment from 'moment';

import { Instagram, MainInfo } from '@/components/pages/instagramProfile';
import { BaseLayout } from "@/components/layouts";
import { categories, Category, InstagramMetadata, InstaUser, User } from '@/types';
import { Redirect } from '@/components/common';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';
import { FirstInstagram } from '@pagesComponents/firstEnter/FirstInstagram';
import { withAuth } from '@/services/auth0';

export interface MainInfoStateForm {
  instagramAccount: string,
  category: Category | null,
  pricePerStory: string,
  pricePerPost: string,
  desc: string,
  forceCheckAccount?: boolean
}

interface ProfileProps {
  user: User,
  token: string,
  token2: string
}

const validationSchema = yup.object<MainInfoStateForm>().shape({
  instagramAccount: yup.string()
    .matches(/^[._A-z0-9]*((-|\s)*[._A-z0-9])*$/, 'No special characters required')
    .required('Account is required'),
  category: yup.string()
    .required('Category is required')
    .oneOf(categories, 'Pick category from list'),
  pricePerStory: yup.string()
    .required('Price is required')
    .matches(/^[0-9]+$/g, 'Price must be a number'),
  pricePerPost: yup.string()
    .required('Price is required')
    .matches(/^[0-9]+$/g, 'Price must be a number'),
  desc: yup.string()
    .min(30, 'Min. 30 characters required')
    .required('Short information is required'),
});

export const getServerSideProps = withAuth();

export default function Profile({ user, token }: ProfileProps) {
  useEffect(() => {
    (async () => {
      if (user.user_metadata?.instagram) {
        if (moment().diff(moment(user.updated_at), 'days') >= 3) {
          await updateInfo({
            instagramAccount: user.user_metadata.instagram.user.username,
            category: user.user_metadata.instagram.category,
            desc: user.user_metadata.instagram.desc,
            pricePerPost: user.user_metadata.instagram.price.post.toString(),
            pricePerStory: user.user_metadata.instagram.price.story.toString(),
            forceCheckAccount: true,
          });
        }
        setInstagramUser(user.user_metadata?.instagram.user);
        setAccountChecked(true);
      }
    })();
  }, []);
  const { register, handleSubmit, errors, watch, clearErrors, setValue } = useForm<MainInfoStateForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: user.user_metadata?.instagram ? {
      instagramAccount: user.user_metadata.instagram.user.username,
      category: user.user_metadata.instagram.category,
      pricePerPost: user.user_metadata.instagram.price.post.toString(),
      pricePerStory: user.user_metadata.instagram.price.story.toString(),
      desc: user.user_metadata.instagram.desc,
    } : undefined,
  });
  
  const [accountChecked, setAccountChecked] = useState(false);
  const [instagramUser, setInstagramUser] = useState<InstaUser | null>(null);
  
  const [checkAccount, checkAccountState] = useCheckAccount(token);
  const [updateMetadata, updateMetadataState] = useUpdateMetadata(token);
  
  const updateInfo = async (formData: MainInfoStateForm) => {
    const { category, desc, pricePerStory, pricePerPost, instagramAccount, forceCheckAccount } = formData;
    try {
      let instaUser = instagramUser as InstaUser;
      if (instagramAccount !== instaUser.username || !accountChecked || forceCheckAccount) {
        instaUser = await checkAccount({nickname: instagramAccount, forceCheck: forceCheckAccount});
      }
      
      const instagramData: InstagramMetadata = {
        user: instaUser,
        category: category as Category,
        desc,
        price: {
          story: Number(pricePerStory),
          post: Number(pricePerPost),
        },
      };
      
      await updateMetadata({
        userId: user.sub,
        metadata: {
          instagram: instagramData,
        }
      });
      
      toast('Data updated', { type: 'success' });
      Router.push('/instagram_profile?refresh=true')
        .then(() => {
          setValue('instagramAccount', instagramAccount);
          setValue('category', category);
          setValue('pricePerStory', pricePerStory);
          setValue('pricePerPost', pricePerPost);
          setValue('desc', desc);
        });
    } catch (error) {
      toast(error, { type: 'error' });
    }
  };
  
  const dependedErrors = {
    instagramAccount: errors.instagramAccount,
    category: errors.category,
    pricePerPost: errors.pricePerPost,
    pricePerStory: errors.pricePerStory,
    desc: errors.desc,
  };
  
  if (!user.user_metadata?.contactInfo) return <Redirect url="/first_enter" />;

  return (
    <BaseLayout className="profile" user={user} title="Instagram">
      <section className="fabrx-section bg-white mt-0 mt-md-3">
        <div className="container">
          <form onSubmit={handleSubmit(updateInfo)} className="row align-items-flex-start position-relative p-3 p-md-0">
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
                      register={register}
                      errors={errors}
                      watch={watch}
                      user={user}
                      loading={checkAccountState.loading || updateMetadataState.loading}
                    />
                  </>
                ) : (
                  <FirstInstagram
                    setAccountChecked={setAccountChecked}
                    register={register}
                    errors={dependedErrors}
                    checkAccount={checkAccount}
                    instagramUser={instagramUser}
                    instagramInput={watch('instagramAccount')}
                    clearErrors={clearErrors as (names?: string | string[]) => void}
                    setInstagramUser={setInstagramUser}
                    checkAccountLoading={checkAccountState.loading}
                    updateMetadataLoading={updateMetadataState.loading}
                  />
                )
            }
          </form>
        </div>
      </section>
    </BaseLayout>
  )
};


