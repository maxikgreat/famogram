import { Container } from 'semantic-ui-react';

import { Categories } from './';

export const Stepper = () => (
  <section className="listing-hld parallax">
    <Container className="listing">
      <Categories />
      {/* <People /> */}
    </Container>
  </section>
);
