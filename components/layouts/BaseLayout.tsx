import { ReactNode, useState } from 'react';
import { MobileView } from "react-device-detect";
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Header, MobileSideBar } from '../common'

interface BaseLayoutProps {
  children: ReactNode,
  className: string,
}

export const BaseLayout = ({ children, className }: BaseLayoutProps) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const router = useRouter();

  const renderRoutes = (): JSX.Element[] => {
    return ['/', '/feed'].map(route => (
      <Link 
        key={route.toString()}
        href={route}
      >
        <Menu.Item
          className="special-text-small"
          name={route === '/' ? 'Home' : route}
          active={router.pathname === route}
        />
      </Link>
    ))
  };

  return (
    <>
      <MobileView renderWithFragment>
        <MobileSideBar
          visible={mobileMenu}
          setVisible={setMobileMenu}
          routes={renderRoutes()}
        />
      </MobileView>
      <Header
        setVisible={setMobileMenu}
        routes={renderRoutes()}
      />
      <main id="main" className={className}>
        {children}
      </main>
    </>
  )
}
