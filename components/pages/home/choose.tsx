import { Container, Divider } from 'semantic-ui-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { observe } from '@/functions/observer';
import { Mode } from '@/types';

export const Choose = () => {
  // const sectionRef = useRef()
  // @ts-ignore
  // const { scrollYProgress } = useElementScroll(sectionRef); 
  useEffect(() =>{
    observe('.content-hld.hidden');
  }, []);

  return (
    <section className="choose-hld parallax parallax-one">
      <Container className="choose">
        <motion.h2 className="bg-accent">I want to...</motion.h2>
        <div className="content-hld hidden">
          <div>
            <h1>LEFT Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, veritatis.</h1>
          </div>
          <div>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, totam.</h1>
          </div>
        </div>
      </Container>
    </section>
  )
};