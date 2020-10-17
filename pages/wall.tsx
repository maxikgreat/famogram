import { Container } from 'semantic-ui-react';

import { BaseLayout } from '@/components/layouts';

export default function Wall() {
  return (
    <BaseLayout className="wall">
       <section className="filter-hld parallax">
        <Container className="filter">
          <h1>Hello</h1>
        </Container>
      </section>
      <section className="listing-hld parallax">
        <Container className="listing">
          <div className="categories-hld">
            <h2>Categories</h2>
          </div>
          <div className="people-hld">
            <h2>People</h2>
          </div>
        </Container>
      </section>
    </BaseLayout>
  )
}
