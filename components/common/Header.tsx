import { Menu, Icon, Container } from 'semantic-ui-react';
import { MobileView, BrowserView } from "react-device-detect";

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
      >
        <Menu.Item
          name="Famogram"
          className="nav-brand"
        />
          <BrowserView renderWithFragment>
            {routes}
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
