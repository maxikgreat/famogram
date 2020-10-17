import { Container, Input } from 'semantic-ui-react';

import { BaseLayout } from '@/components/layouts';
import { Categories, People } from '@pagesComponents/wall';

export default function Wall() {
  return (
    <BaseLayout className="wall">
       <section className="filter-hld parallax">
        <Container className="filter">
          <div>
            <h1 className="text-accent">Find username</h1>
          </div>
          <div>
            <Input />
          </div>
        </Container>
      </section>
      <section className="listing-hld parallax">
        <Container className="listing">
          <Categories />
          <People />
        </Container>
      </section>
    </BaseLayout>
  )
}
