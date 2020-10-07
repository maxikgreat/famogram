import { Container } from 'semantic-ui-react';
import { motion } from 'framer-motion';

export const Welcome = () => {
  return (
    <section className="welcome-hld">
      {/* <div className="bg-image"></div> */}
      <div className="bg-gradient"></div>
      <div className="bg-gradient bg2"></div>
      <div className="bg0gradient bg3"></div>
      <Container className="welcome">
        <div></div>
        <div>
          <h1 
            className="bg-accent skew" 
            // animate={{ x: 20 }}
            // transition={{ 
            //   repeat: Infinity, 
            //   repeatType: 'mirror', 
            //   duration: 2,
            //   ease: 'easeInOut',
            //   delay: 0.33
            // }}
          >Lorem</h1>
          <h1 
            className="bg-secondary skew" 
            // animate={{ x: 20 }}
            // transition={{ 
            //   repeat: Infinity, 
            //   repeatType: 'mirror', 
            //   duration: 2,
            //   ease: 'easeInOut',
            //   delay: 0.66
            // }}
          >Ipsum</h1>
          <h1 
            className="bg-primary skew" 
            // animate={{ x: 20 }}
            // transition={{ 
            //   repeat: Infinity, 
            //   repeatType: 'mirror', 
            //   duration: 2,
            //   ease: 'easeInOut',
            //   delay: 0.99
            // }}
          >Vensa</h1>
          <div className="img-container">
            <img src="/assets/images/welcome1.jpg" />
          </div>
          
        </div>
      </Container>
    </section>
  )
};