import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router';

import { categories, Metadata, Role, User, Category as CategoryType, InstaUser } from '@/types'
import { BaseLayout } from '@/components/layouts'
import { PickRole } from '@pagesComponents/firstEnter';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';
import { withAuth } from '@/services/auth0';
import { Redirect } from '@/components/common';

export interface FirstInstagramForm {
  instagramAccount: string,
  desc: string,
  category: CategoryType,
  pricePerStory: string,
  pricePerPost: string,
}

export interface FirstTikTokForm {
  tiktokAccount: string,
  desc: string,
}

export interface FirstEnterForm {
  contactEmail: string,
  whatsApp: string,
  facebook: string,
  role: Role | null,
  profile?: FirstInstagramForm
}

interface FirstEnterProps {
  user: User,
  token: string,
}

const validationSchema = yup.object({
  // contact info
  contactEmail: yup.string()
    .email('Email isn\'t valid')
    .required('Email is required'),
  whatsApp: yup.string(),
  facebook: yup.string()
    .url('It doesn\'t look like a url'),
  role: yup.string().oneOf(['influencer', 'instagram', 'tiktok']),
  profile: yup.object()
    .when('role', {
      is: value => value === 'instagram',
      then: yup.object({
        instagramAccount: yup.string()
          .matches(/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/, 'No special characters required')
          .required('Account is required'),
        desc: yup.string()
          .min(30, 'Min. 30 characters required')
          .required('Short information is required'),
        category: yup.string()
          .required('Category is required')
          .oneOf(categories, 'Pick category from list'),
        pricePerStory: yup.string()
          .required('Price is required')
          .matches(/^[0-9]+$/g, 'Price must be a number'),
        pricePerPost: yup.string()
          .required('Price is required')
          .matches(/^[0-9]+$/g, 'Price must be a number'),
      })
    })
    .when('role', {
      is: value => value === 'tiktok',
      // TODO tiktok validation
      then: yup.object().notRequired(),
      otherwise: yup.object().notRequired(),
    })
});

export const getServerSideProps = withAuth();

export default function FirstEnter({ user, token }: FirstEnterProps) {
  const { register, watch, errors, handleSubmit, setValue, trigger, clearErrors } = useForm<FirstEnterForm>({
    resolver: yupResolver(validationSchema),
  });
  
  const [toggler, setToggler] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [instagramUser, setInstagramUser] = useState<InstaUser | null>(null);
  
  const [checkAccount, checkAccountState] = useCheckAccount(token);
  const [updateMetadata, updateMetadataState] = useUpdateMetadata(token);
  
  const setRoleHandler = async (role: Role) => {
    const result = await trigger(['contactEmail', 'whatsApp', 'facebook']);
    if (result) {
      setRole(role);
      setValue('role', role);
    }
  };
  
  // TODO remove email if undefined (facebook example)
  const customEmailLabel = () => (
    <small>
      Enter <span className="text-primary">valid</span>  email address
      <span
        onClick={() => setValue('contactEmail', user.email)}
        style={{textDecoration: 'underline', cursor: 'pointer'}}
      >&nbsp; or set email from profile</span>
    </small>
  );

  const finishHandler = async (formData: FirstEnterForm) => {
    const { contactEmail, whatsApp, facebook, profile } = formData;
    try {
      const contactInfoMetadata = {
        contactEmail,
        messengers: {
          whatsApp,
          facebook
        }
      };
      const instagramMetadata = profile ? {
          user: instagramUser as InstaUser,
          desc: profile.desc,
          category: profile.category,
          price: {
            post: Number(profile.pricePerPost),
            story: Number(profile.pricePerStory)
          }
        } : undefined;
      const data: {userId: string, metadata: Metadata } = {
        userId: user.sub,
        metadata: {
          instagram: instagramMetadata,
          contactInfo: contactInfoMetadata,
        }
      };
  
      await updateMetadata(data);
      
      toast('Profile created!', { type: 'success' });
      Router.push('/find_blogger?refresh=true');
    } catch (error) {
      toast(error, { type: 'error' });
    }
  }
  
  if (user.user_metadata?.contactInfo) return <Redirect url="/find_blogger" />
  
  return (
    <BaseLayout className="first-enter">
      <section className="fabrx-section bg-white mt-5 p-3 p-md-0">
        <form onSubmit={handleSubmit(finishHandler)} className="position-relative">
          <PickRole
            register={register}
            errors={errors}
            toggler={toggler}
            role={role}
            setToggler={setToggler}
            setRoleHandler={setRoleHandler}
            customEmailLabel={customEmailLabel}
            instagramUser={instagramUser}
            setInstagramUser={setInstagramUser}
            watch={watch}
            clearErrors={clearErrors}
            checkAccount={checkAccount}
            checkAccountLoading={checkAccountState.loading}
            updateMetadataLoading={updateMetadataState.loading}
          />
        </form>
      </section>
    </BaseLayout>
  )
}
