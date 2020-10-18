import { Container, Input } from 'semantic-ui-react';

import { BaseLayout } from '@/components/layouts';
import { Start, Stepper } from '@pagesComponents/wall';

export default function Wall() {
  return (
    <BaseLayout className="wall">
      <Start />
      <Stepper />
    </BaseLayout>
  )
}
