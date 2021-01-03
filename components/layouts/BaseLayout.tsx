import { ReactNode } from 'react';
import Head from 'next/head';

import { Header, Footer } from '../common'
import { useUser } from '@/hooks/useUser';
import { User } from '@/types';

interface BaseLayoutProps {
  children: ReactNode,
  className: string,
  user?: User | undefined,
  title?: string
}

export const BaseLayout = ({ children, className, user, title }: BaseLayoutProps) => {
  const { user: userHook, loading } = useUser();
  
  return (
    <>
      <Head>
        <title>{title ? `${title} | Hativi` : 'Hativi'}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="description" content="Easy-find and collaborate with blogger that you really need or offer your candidature to advertise influencers' interests. Eventually do it all concurrently" />
      </Head>
      <Header user={user || userHook} loading={loading} />
      <main id="main" className={className}>
        {children}
      </main>
      <Footer user={user || userHook} loading={loading} />
    </>
  )
}
