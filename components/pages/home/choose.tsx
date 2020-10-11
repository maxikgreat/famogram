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
  },
  bloger: {
    name: 'Bloger',
    title: 'to be advertised',
    imgSrc: '/assets/images/chose-finder.jpg',
  }
}

interface CardProps {
  name: string,
  title: string,
  imgSrc: string,
}

const Card = ({ name, title, imgSrc }: CardProps) => (
  <div className="card shadow">
    <div className="card-img-hld">
      <img src={imgSrc} alt={name} />
    </div>
    <div className="card-content-hld">
      <h1>LEFT Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, veritatis.</h1>
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
          <Card name={finder.name} title={finder.title} imgSrc={finder.imgSrc} />
          <Card name={bloger.name} title={bloger.title} imgSrc={bloger.imgSrc} />
        </div>
      </Container>
    </section>
  )
};