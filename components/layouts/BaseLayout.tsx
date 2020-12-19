import { ReactNode } from 'react';

import { Header, Footer } from '../common'
import { useUser } from '@/hooks/useUser';
import { User } from '@/types';

interface BaseLayoutProps {
  children: ReactNode,
  className: string,
  user: User | undefined
}

export const BaseLayout = ({ children, className, user }: BaseLayoutProps) => {
  const { loading } = useUser();
  
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
