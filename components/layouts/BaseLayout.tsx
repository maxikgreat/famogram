import { ReactNode } from 'react';
import Head from 'next/head';

import { Header, Index } from '../common'
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
        <title>{title ? `${title} | Hativi | Simplyfind your co-star` : 'Hativi | Simplyfind your co-star'}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="description" content="Simplify your way of advertising. Find your ideal influencer by specific category you need and advertise your product or service through the unlimited possibilities of Hativi" />
      </Head>
      <Header user={user || userHook} loading={loading} />
      <main id="main" className={className}>
        {children}
      </main>
      <Index user={user || userHook} loading={loading} />
    </>
  )
}
