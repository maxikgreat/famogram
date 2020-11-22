
import { BaseLayout } from '@/components/layouts';
import { withAuth } from '@/services/auth0';

export const getServerSideProps = withAuth();

export default function General() {
  return (
    <BaseLayout className="general">
      <section className="fabrx-section bg-white mt-5">
        <h1>hello</h1>
      </section>
    </BaseLayout>
  )
}