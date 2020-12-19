import Router from 'next/router';
import { toast } from 'react-toastify';

import { Redirect } from '@/components/common';
import { BaseLayout } from '@/components/layouts';
import { ContactInfo, ChangePassword, ChangeEmail } from '@/components/pages/settings';
import { useUpdateEmail, useUpdateMetadata, useUpdatePassword } from '@/hooks';
import { User } from '@/types';
import { withAuth } from '@/services/auth0';


interface  InfoValueForm {
  contactEmail: string,
  whatsApp: string,
  facebook: string,
}

interface SettingsProps {
  user: User,
  token: string,
}

export const getServerSideProps = withAuth();

export default function Settings({ user, token }: SettingsProps) {
  const [updateMetadata, updateMetadataState] = useUpdateMetadata(token);
  const [updateNewEmail, updateEmailState] = useUpdateEmail(token);
  const [updatePassword, updatePasswordState] = useUpdatePassword(token);

  const updateContactInfo = async (contactInfoData: InfoValueForm) => {
    try {
      const { contactEmail, whatsApp, facebook } = contactInfoData;
      const contactInfoMetadata = {
        contactEmail,
        messengers: {
          whatsApp, facebook
        }
      }
      await updateMetadata({
        userId: user.sub,
        metadata: {
          contactInfo: contactInfoMetadata
        }
      });
      
      toast('Contacts updated', {type: 'success'});
      Router.push('/settings?refresh=true');
    } catch (error) {
      toast(error, {type: 'error'})
    }
  }

  const updateEmail = (emailData: {newEmail: string}) => {
    const { newEmail } = emailData;
    updateNewEmail({ userId: user.sub, newEmail })
      .then(() => {
        toast('Email updated! You will be redirected to home page', {type: 'success'})
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            window.location.href = '/logout';
          }, 2000)
        }
      })
      .catch((error) => toast(error, {type: 'error'}))
  }

  const updatePass = () => {
    updatePassword({
      userId: user.sub,
    })
      .then(({ ticket }) => {
        if (typeof window !== 'undefined') {
          let win = window.open(ticket, '_blank');
          win?.focus();
        }
      })
      .catch((error) => toast(error, {type: 'error'}))
  }
  
  if (!user.user_metadata?.contactInfo) return <Redirect url='/first_enter' />
  
  return (
    <BaseLayout className="general" user={user}>
     <section className="fabrx-section bg-white mt-0 mt-md-5">
        <div className="container">
          <div className="row align-items-flex-start position-relative p-3 p-md-0">
            <div className="col-12 col-md-6">
              <img
                src="./assets/images/vectors/vector-11.svg"
                className="position-absolute"
                style={{ opacity: 0.15, height: '100%' }}
              />
            </div>
            <div className="col-12 col-md-6">
              <ContactInfo
                user={user}
                contactInfo={user.user_metadata.contactInfo}
                updateContactInfo={updateContactInfo}
                loading={updateMetadataState.loading}
              />
              <ChangeEmail
                user={user}
                updateEmail={updateEmail}
                loading={updateEmailState.loading}
              />
              <ChangePassword
                loading={updatePasswordState.loading}
                updatePass={updatePass}
              />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
