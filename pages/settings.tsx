
import { Redirect } from '@/components/common';
import { BaseLayout } from '@/components/layouts';
import { ContactInfo, ChangePassword, ChangeEmail } from '@/components/pages/settings';
import { useUpdateEmail, useUpdateMetadata } from '@/hooks';
import { withAuth } from '@/services/auth0';
import { User } from '@/types';
import { toast } from 'react-toastify';
import { InfoValueForm } from './first_enter';

interface SettingsProps {
  user: User,
  token: string,
}

export const getServerSideProps = withAuth();

export default function Settings({ user, token }: SettingsProps) {

  if (!user.user_metadata?.contactInfo) return <Redirect url='/first_enter' />

  const [updateMetadata, updateMetadataState] = useUpdateMetadata(token);
  const [updateNewEmail, updateEmailState] = useUpdateEmail(token);

  const updateContactInfo = (contactInfoData: InfoValueForm) => {
    const { contactEmail, whatsApp, facebook } = contactInfoData;
    updateMetadata({ userId: user.sub, metadata: {
      contactInfo: {
        contactEmail,
        messengers: {
          whatsApp, facebook
        }
      }
    }})
      .then(() => {
        if (typeof window !== 'undefined') window.location.href = '/api/v1/login';
      })
      .catch((error) => toast(error, {type: 'error'}))
  }

  const updateEmail = (emailData: {newEmail: string}) => {
    const { newEmail } = emailData;
    updateNewEmail({ userId: user.sub, newEmail })
      .then(() => {
        if (typeof window !== 'undefined') window.location.href = '/api/v1/login';
      })
      .catch((error) => toast(error, {type: 'error'}))
  }

  return (
    <BaseLayout className="general">
     <section className="fabrx-section bg-white mt-5">
        <div className="container">
          <div className="row align-items-flex-start position-relative">
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
              <ChangePassword />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}