import { Container, Button, Divider } from 'semantic-ui-react';
import { motion } from 'framer-motion';

export const Welcome = () => {
  return (
    <section className="welcome-hld">
      {/* <div className="bg-image"></div> */}
      <div className="bg-gradient"></div>
      <div className="bg-gradient bg2"></div>
      <div className="bg0gradient bg3"></div>
      <Container className="welcome">
        <div className="content-hld">
          <h1 className="ddd-accent">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, recusandae?
          </h1>

          <Divider className="skew" />
          <button 
            className=""
          >discover</button>
        </div>
        <div className="photo-hld">
          <h2 className="bg-accent skew">Lorem</h2>
          <h2 className="bg-secondary skew">Ipsum</h2>
          <h2 className="bg-primary skew">Vensa</h2>
          <div className="img-container skew round shadow">
            <img src="/assets/images/welcome1.jpg" />
          </div>
          
        </div>
      </Container>
    </section>
  )
};