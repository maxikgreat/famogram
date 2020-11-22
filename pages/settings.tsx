
import { BaseLayout } from '@/components/layouts';
import { ContactInfo, ChangePassword, ChangeEmail } from '@/components/pages/settings';
import { withAuth } from '@/services/auth0';

export const getServerSideProps = withAuth();

export default function General() {
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
              <ContactInfo />
              <ChangeEmail />
              <ChangePassword />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}