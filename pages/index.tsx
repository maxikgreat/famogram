import { useState } from 'react';

import { BaseLayout } from '@/components/layouts';
import { Welcome, Choose } from '@pagesComponents/home';
import { Mode } from '@/types';

export default function Home() {

  const [mode, setMode] = useState<Mode>('finder');

  return (
    <BaseLayout className="home">
      <Welcome />
      {/* <Choose mode={mode} setMode={setMode} /> */}
    </BaseLayout>
  )
}
