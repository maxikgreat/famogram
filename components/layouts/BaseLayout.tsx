import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Header, Footer } from '../common'

interface BaseLayoutProps {
  children: ReactNode,
  className: string,
}

export const BaseLayout = ({ children, className }: BaseLayoutProps) => {
  const router = useRouter();
  const [counter, setCounter] = useState(0);

  // const renderRoutes = (): JSX.Element[] => {
  //   return ['/wall', '/template'].map(route => (
  //     <Link 
  //       key={route.toString()}
  //       href={route}
  //     >
  //       <Menu.Item
  //         className="bg-accent"
  //         name={route}
  //         active={router.pathname === route}
  //       />
  //     </Link>
  //   ))
  // };

  return (
    <>
      <Header />
      <div onClick={() => setCounter(counter => counter + 1)}>{counter}</div>
      <main id="main" className={className}>
        {children}
      </main>
      <Footer />
    </>
  )
}
