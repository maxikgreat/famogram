import { Container, Input } from 'semantic-ui-react'; 

export const Start = () => (
  <section className="filter-hld parallax">
    <Container className="filter">
      <div>
        <h1 className="text-accent">Find username</h1>
      </div>
      <div>
        <Input />
      </div>
    </Container>
    <h2 className="bg-accent">or</h2>
  </section>
)