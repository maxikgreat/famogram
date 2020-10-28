import { BaseLayout } from '@/components/layouts';
import { Hero, Stepper } from '@pagesComponents/home';

export default function Home() {
  return (
    <BaseLayout className="home">
      <Hero />
      <Stepper />
    </BaseLayout>
  )
}
