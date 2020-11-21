import { useState } from 'react';

import { Category, InstagramMetadata, InstaUser, Metadata, Role, User } from '@/types'
import { BaseLayout } from '@/components/layouts'
import { Redirect } from '@/components/common';
import { PickRole } from '@pagesComponents/firstEnter';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';
import { withAuth } from '@/services/auth0';
import { toast } from 'react-toastify';
import { FirstInstagram } from '@/components/pages/firstEnter/FirstInstagram';

export interface InfoValueForm {
  contactEmail: string,
  whatsApp: string,
  facebook: string,
}
interface FirstEnterProps {
  user: User,
  token: string,
}

export const getServerSideProps = withAuth();

export default function FirstEnter({ user, token }: FirstEnterProps) {
  const [role, setRole] = useState<Role | null>(null);

  const [info, setInfo] = useState<InfoValueForm>({
    contactEmail: '',
    whatsApp: '',
    facebook: '',
  });

  const [checkAccount, checkAccountState] = useCheckAccount(token);
  const [updateMetadata, updateMetadataState] = useUpdateMetadata(token);

  const customEmailLabel = () => (
    <p>
      Enter <span className="text-primary">valid</span>  email address or&nbsp;
      <span 
        onClick={() => setInfo(prevState => ({ ...prevState, contactEmail: user.email }))}
        style={{textDecoration: 'underline', cursor: 'pointer'}}
      >set email from profile</span>
    </p>
  )

  const finishHandler = (data: InstagramMetadata) => {
    console.log(data);
    // const data: {userId: string, metadata: Metadata } = {
    //   userId: user.sub,
    //   metadata: {
    //     user: instagramAccount.user as InstaUser,
    //     category: category.value as Category,
    //     price: {
    //       story: Number(price.story),
    //       post: Number(price.post),
    //     },
    //     desc: info.desc,
    //     contactEmail: info.contactEmail,
    //     messengers: {
    //       whatsApp: info.whatsApp,
    //       facebook: info.facebook
    //     }
    //   }
    // }

    // updateMetadata(data)
    //   .then(() => {
    //     // not handled correctly in auth0-nextjs library so thats the solution
    //     if (typeof window !== 'undefined') window.location.href = '/api/v1/login';
    //   })
    //   .catch((error) => toast(error, { type: 'error' }));
  }

  // if (user.user_metadata) return <Redirect url="/instagram_profile" />
  
  return (
    <BaseLayout className="first-enter">
      <section className="fabrx-section bg-white mt-5">
        {
          !role
          ? <PickRole 
              setRole={setRole}   
              info={info}
              setInfo={setInfo}
              customEmailLabel={customEmailLabel}
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