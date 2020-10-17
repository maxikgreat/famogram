import { ReactNode } from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Header } from '../common'

interface BaseLayoutProps {
  children: ReactNode,
  className: string,
}

export const BaseLayout = ({ children, className }: BaseLayoutProps) => {
  const router = useRouter();

  const renderRoutes = (): JSX.Element[] => {
    return ['/wall'].map(route => (
      <Link 
        key={route.toString()}
        href={route}
      >
        <Menu.Item
          className="bg-accent"
          name={route}
          active={router.pathname === route}
        />
      </Link>
    ))
  };

  return (
    <>
      <Header routes={renderRoutes()} />
      <main id="main" className={className}>
        {children}
      </main>
    </>
  )
}
