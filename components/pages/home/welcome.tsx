import { Container } from 'semantic-ui-react';
import { motion } from 'framer-motion';

export const Welcome = () => {
  return (
    <section className="welcome-hld">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Container className="welcome">
        <div></div>
        <div>
          <motion.h1 
            className="accent round" 
            animate={{ x: 20 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: 'mirror', 
              duration: 2,
              ease: 'easeInOut',
              delay: 0.33
            }}
          >Lorem</motion.h1>
          <motion.h1 
            className="secondary round" 
            animate={{ x: 20 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: 'mirror', 
              duration: 2,
              ease: 'easeInOut',
              delay: 0.66
            }}
          >Ipsum</motion.h1>
          <motion.h1 
            className="primary round" 
            animate={{ x: 20 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: 'mirror', 
              duration: 2,
              ease: 'easeInOut',
              delay: 0.99
            }}
          >Vensa</motion.h1>
        </div>
      </Container>
    </section>
  )
};