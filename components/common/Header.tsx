import { Menu, Icon, Container, Divider } from 'semantic-ui-react';
import { MobileView, BrowserView } from "react-device-detect";
import Router from 'next/router';

interface HeaderProps {
  setVisible: (isVisible: boolean) => void,
  routes: JSX.Element[],
}

export const Header = ({ setVisible, routes }: HeaderProps) => (
  <header>
    <Container>
      <Menu
        text
        as="nav"
        className="skew"
      >
        <Menu.Item>
          <div 
            className="logo-hld"
            onClick={() => Router.push('/')}
          >
            <span className="logo">Hativi</span>
          </div>
        </Menu.Item>
          <BrowserView renderWithFragment>
            {routes}
            <Divider className="divider-primary" />
          </BrowserView>
          <MobileView renderWithFragment>
            <Menu.Item
              as="div"
              position="right"
              onClick={() => setVisible(true)}
            >
              <Icon name="bars" size="large" />
            </Menu.Item>
          </MobileView>
      </Menu>
    </Container>
  </header>
)
