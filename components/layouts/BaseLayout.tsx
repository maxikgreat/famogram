import { ReactNode } from 'react';

import { Header, Footer } from '../common'
import { useUser } from '@/hooks/useUser';

interface BaseLayoutProps {
  children: ReactNode,
  className: string,
}

export const BaseLayout = ({ children, className }: BaseLayoutProps) => {
  const { user, loading } = useUser();
  
  return (
    <>
      <Header user={user} loading={loading} />
      <main id="main" className={className}>
        {children}
      </main>
      <Footer user={user} loading={loading} />
    </>
  )
}
