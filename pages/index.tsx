import { useSelector } from 'react-redux';

import { BaseLayout } from '@/components/layouts';
import { Hero, Stepper, Price, Testimonials } from '@pagesComponents/home';
import { RootState } from '@/store/rootReducer';

export default function Home() {
  const couterValue = useSelector(({ counter }: RootState) => counter.value);

  return (
    <BaseLayout className="home">
      <div>{couterValue}</div>
      <Hero />
      <Stepper />
      <Price />
      <Testimonials />
    </BaseLayout>
  )
}
