import { Menu, Container } from 'semantic-ui-react';
import Router from 'next/router';

interface HeaderProps {
  routes: JSX.Element[],
}

export const Header = ({ routes }: HeaderProps) => (
  <header>
    <Container>
      <Menu text as="nav">
        <Menu.Item>
          <div 
            className="logo-hld"
            onClick={() => Router.push('/')}
          >
            <span className="logo">Hativi</span>
          </div>
        </Menu.Item>
          {routes}
      </Menu>
    </Container>
  </header>
)
