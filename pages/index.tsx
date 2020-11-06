import { BaseLayout } from '@/components/layouts';
import { Hero, Stepper, Price, Testimonials } from '@pagesComponents/home';

export default function Home() {
  return (
    <BaseLayout className="home">
      <Hero />
      <Stepper />
      <Price />
      <Testimonials />
    </BaseLayout>
  )
}
