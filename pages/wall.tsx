import { BaseLayout } from '@/components/layouts';
import { Picker } from '@/components/pages/wall';

export default function Wall() {
  return (
    <BaseLayout className="wall">
      <Picker />
    </BaseLayout>
  )
}
