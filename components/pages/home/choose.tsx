import { Container, Divider } from 'semantic-ui-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { observe } from '@/functions/observer';
import { Mode } from '@/types';

const mode = {
  finder: {
    name: 'Finder',
    title: 'to advertise',
    imgSrc: '/assets/images/chose-finder.jpg',
    color: 'primary',
  },
  bloger: {
    name: 'Bloger',
    title: 'to be advertised',
    imgSrc: '/assets/images/chose-bloger.jpg',
    color: 'accent',
  }
}

interface CardProps {
  name: string,
  title: string,
  imgSrc: string,
  color: string,
}

const Card = ({ name, title, imgSrc, color }: CardProps) => (
  <div className="card shadow round">
    <div className="card-img-hld">
      <h2 className={`bg-${color}`}>{title}</h2>
      <img src={imgSrc} alt={name} />
    </div>
    <div className={`card-content-hld bg-${color}`}>
      <p style={{ color: '#000'}}>LEFT Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, veritatis.</p>
    </div>
  </div>
);

export const Choose = () => {
  useEffect(() =>{
    observe('.content-hld.hidden');
  }, []);

  const { finder, bloger } = mode;

  return (
    <section className="choose-hld parallax parallax-one">
      <Container className="choose">
        <motion.h2 className="bg-accent">I want to...</motion.h2>
        <div className="content-hld hidden skew">
          <Card name={finder.name} title={finder.title} imgSrc={finder.imgSrc} color={finder.color} />
          <Card name={bloger.name} title={bloger.title} imgSrc={bloger.imgSrc} color={bloger.color} />
        </div>
      </Container>
    </section>
  )
};