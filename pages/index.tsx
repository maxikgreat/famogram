import { useState } from 'react';

import { BaseLayout } from '@/components/layouts';
import { Welcome } from '@pagesComponents/home';

export default function Home() {

  const [isFinder, isSetFinder] = useState(false);

  return (
    <BaseLayout className="home">
      <Welcome />
    </BaseLayout>
  )
}
