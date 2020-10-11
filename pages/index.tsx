import { BaseLayout } from '@/components/layouts';
import { Welcome, Choose } from '@pagesComponents/home';

export default function Home() {
  return (
    <BaseLayout className="home">
      <Welcome />
      <Choose />
    </BaseLayout>
  )
}
