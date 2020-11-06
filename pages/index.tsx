import { useEffect } from 'react';
import { BaseLayout } from '@/components/layouts';
import { Hero, Stepper, Price, Testimonials } from '@pagesComponents/home';

export default function Home() {
  useEffect(() => {
    console.log('redner');
  }, []);
  return (
    // <BaseLayout className="home">
    <>
      <Hero />
      <Stepper />
      <Price />
      <Testimonials />
    </>
    // </BaseLayout>
  )
}

Home.Layout = BaseLayout;