import { useState } from 'react';
import { toast } from 'react-toastify';

import { InstagramMetadata, Metadata, Role, User } from '@/types'
import { BaseLayout } from '@/components/layouts'
import { Redirect } from '@/components/common';
import { PickRole } from '@pagesComponents/firstEnter';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';
import { withAuth } from '@/services/auth0';
import { FirstInstagram } from '@/components/pages/firstEnter/FirstInstagram';

export interface InfoValueForm {
  contactEmail: string,
  whatsApp: string,
  facebook: string,
};

interface FirstEnterProps {
  user: User,
  token: string,
};

export const getServerSideProps = withAuth();

export default function FirstEnter({ user, token }: FirstEnterProps) {
  const [toggler, setToggler] = useState(false);
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

  const finishHandler = (instaUserData?: InstagramMetadata) => {
    const { contactEmail, whatsApp, facebook } = info;
    const data: {userId: string, metadata: Metadata } = {
      userId: user.sub,
      metadata: {
        instagram: instaUserData,
        contactInfo: {
          contactEmail,
          messengers: {
            whatsApp,
            facebook
          }
        }
      }
    };
    
    updateMetadata(data)
      .then(() => {
        // not handled correctly in auth0-nextjs library so thats the solution
        if (typeof window !== 'undefined') window.location.href = '/api/v1/login?redirectTo=/find_blogger';
      })
      .catch((error) => toast(error, { type: 'error' }));
  }

  if (user.user_metadata?.contactInfo) return <Redirect url="/find_blogger" />
  
  return (
    <BaseLayout className="first-enter">
      <section className="fabrx-section bg-white mt-5 p-3 p-md-0">
        {
          !role
          ? <PickRole
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
