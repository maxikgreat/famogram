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
    action: 'discover wall'
  },
  bloger: {
    name: 'Bloger',
    title: 'to be advertised',
    imgSrc: '/assets/images/chose-bloger.jpg',
    color: 'accent',
    action: 'want on wall'
  }
}

interface CardProps {
  name: string,
  title: string,
  imgSrc: string,
  color: string,
  action: string,
}

const Card = ({ name, title, imgSrc, color, action }: CardProps) => (
  <div className="card shadow round">
    <div className="card-img-hld">
      <h2 className={`bg-${color}`}>{title}</h2>
      <img src={imgSrc} alt={name} />
    </div>
    <div className={`card-content-hld bg-${color}`}>
      <ul className="card-content-list">
        <li>Lorem, ipsum.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ul>
      <button className={color}>{action}</button>
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
          <Card {...finder} />
          <Card {...bloger} />
        </div>
      </Container>
    </section>
  )
};