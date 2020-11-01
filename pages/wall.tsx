import { BaseLayout } from '@/components/layouts';
import { Picker } from '@/components/pages/wall';

export default function Home() {
  return (
    <BaseLayout className="wall">
      <Picker />
    </BaseLayout>
  )
}
