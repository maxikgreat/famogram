import { Container, Input, Icon } from 'semantic-ui-react'; 

export const Start = () => (
  <section className="filter-hld parallax">
    <Container className="filter">
      <div>
        <h1 className="bg-accent text-accent">Find username</h1>
      </div>
      <div>
        <Input className="accent">
          <Icon name="at" size="big" />
          <input />
        </Input>
      </div>
    </Container>
    <h2 className="bg-accent">or</h2>
  </section>
)