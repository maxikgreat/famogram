import { BaseLayout } from '@/components/layouts';
import { Welcome, Choose, Advantages, Next } from '@pagesComponents/home';

export default function Home() {
  return (
    <BaseLayout className="home">
      <Welcome />
      <Choose />
      <Advantages />
      <Next />
    </BaseLayout>
  )
}
