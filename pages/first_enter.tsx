import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { categories, InstagramMetadata, Metadata, Role, User, Category as CategoryType } from '@/types'
import { BaseLayout } from '@/components/layouts'
import { Redirect } from '@/components/common';
import { PickRole } from '@pagesComponents/firstEnter';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';
import { withAuth } from '@/services/auth0';
import { FirstInstagram } from '@/components/pages/firstEnter/FirstInstagram';


export interface FirstEnterForm {
  contactEmail: string,
  whatsApp: string,
  facebook: string,
  socialMedia?: {
    instagramAccount: string,
    desc: string,
    category: CategoryType,
    pricePerStory: string,
    pricePerPost: string,
  }
};

export interface InfoValueForm {
  contactEmail: string,
  whatsApp: string,
  facebook: string,
}

interface FirstEnterProps {
  user: User,
  token: string,
}

const validationSchema = yup.object<FirstEnterForm>().shape({
  // contact info
  contactEmail: yup.string()
    .email('Email isn\'t valid')
    .required('Email is required'),
  whatsApp: yup.string(),
  facebook: yup.string()
    .url('It doesn\'t look like a url'),
  // instagram or tiktok info
  // TODO TikTok fields
  socialMedia: yup.lazy((value) => {
    if (value === 'instagram') {
      return yup.object().shape({
        instagramAccount: yup.string()
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
    }
    return yup.mixed().notRequired();
  }),
});

export const getServerSideProps = withAuth();

export default function FirstEnter({ user, token }: FirstEnterProps) {
  const [toggler, setToggler] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  
  const [info, setInfo] = useState<InfoValueForm>({
    contactEmail: '',
    whatsApp: '',
    facebook: '',
  });
  
  const { register, getValues, errors, handleSubmit } = useForm<FirstEnterForm>({
    resolver: yupResolver(validationSchema),
  });
  

  const [checkAccount, checkAccountState] = useCheckAccount(token);
  const [updateMetadata, updateMetadataState] = useUpdateMetadata(token);

  // TODO remove email if undefined (facebook example)
  const customEmailLabel = () => (
    <p>
      Enter <span className="text-primary">valid</span>  email address or&nbsp;
      <span
        onClick={() => setInfo(prevState => ({ ...prevState, contactEmail: user.email }))}
        style={{textDecoration: 'underline', cursor: 'pointer'}}
      >set email from profile</span>
    </p>
  )

  const finishHandler = (instaUserData?: InstagramMetadata) => {
    console.log(instaUserData);
    // const { contactEmail, whatsApp, facebook } = info;
    // const data: {userId: string, metadata: Metadata } = {
    //   userId: user.sub,
    //   metadata: {
    //     instagram: instaUserData,
    //     contactInfo: {
    //       contactEmail,
    //       messengers: {
    //         whatsApp,
    //         facebook
    //       }
    //     }
    //   }
    // };
    //
    // updateMetadata(data)
    //   .then(() => {
    //     // not handled correctly in auth0-nextjs library so thats the solution
    //     if (typeof window !== 'undefined') window.location.href = '/api/v1/login?redirectTo=/find_blogger&prompt=true';
    //   })
    //   .catch((error) => toast(error, { type: 'error' }));
  }

  if (user.user_metadata?.contactInfo) return <Redirect url="/find_blogger" />
  
  return (
    <BaseLayout className="first-enter">
      <section className="fabrx-section bg-white mt-5 p-3 p-md-0">
        {
          !role
          ? <PickRole
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              toggler={toggler}
              setToggler={setToggler}
              setRole={setRole}
              info={info}
              setInfo={setInfo}
              customEmailLabel={customEmailLabel}
              finishHandler={finishHandler}
            />
          : role === 'instagram'
            ? <FirstInstagram
                checkAccount={checkAccount}
                finishHandler={finishHandler}
                checkAccountLoading={checkAccountState.loading}
                updateMetadataLoading={updateMetadataState.loading}
              />
            : null
        }
      </section>
    </BaseLayout>
  )
}
