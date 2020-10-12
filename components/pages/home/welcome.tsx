import { Container, Button, Divider } from 'semantic-ui-react';
import { motion } from 'framer-motion';

export const Welcome = () => {
  return (
    <section className="welcome-hld">
      <div className="bg-gradient"></div>
      <div className="bg-img"></div>
      <Container className="welcome">
        <div className="content-hld">
          <h1 className="ddd-accent">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, recusandae?
          </h1>
          <Divider className="divider-primary skew" />
          <div className="action-hld">
            <button 
              className="secondary huge"
            >discover</button>
          </div>
        </div>
        <div className="photo-hld">
          <h2 className="bg-accent skew">Lorem</h2>
          <h2 className="bg-secondary skew">Ipsum</h2>
          <h2 className="bg-primary skew">Vensa</h2>
          <div className="img-container skew round shadow">
            <img src="/assets/images/welcome.jpg" />
          </div>
        </div>
      </Container>
      {/* <img src="/assets/images/icons/discover.png" className="img-discover" alt="Discover" /> */}
    </section>
  )
};