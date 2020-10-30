import Link from 'next/link';

interface HeaderProps {
  routes: JSX.Element[],
}

export const Header = () => (
  <header className="fabrx-header bg-white mt-md-5 sticky-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg has-header-inner">
        <Link href="/">
          <a className="navbar-brand logo">Hativi</a>
        </Link>
        <button className="navbar-toggler pr-0 collapsed" type="button" data-toggle="collapse" data-target="#menu-3" aria-controls="menu-3" aria-expanded="false" aria-label="Toggle navigation">
          <svg data-name="Icon/Hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path data-name="Icon Color" d="M1.033,14a1.2,1.2,0,0,1-.409-.069.947.947,0,0,1-.337-.207,1.2,1.2,0,0,1-.216-.333,1.046,1.046,0,0,1-.072-.4A1.072,1.072,0,0,1,.072,12.6a.892.892,0,0,1,.216-.321.947.947,0,0,1,.337-.207A1.2,1.2,0,0,1,1.033,12H22.967a1.206,1.206,0,0,1,.409.069.935.935,0,0,1,.336.207.9.9,0,0,1,.217.321,1.072,1.072,0,0,1,.072.391,1.046,1.046,0,0,1-.072.4,1.206,1.206,0,0,1-.217.333.935.935,0,0,1-.336.207,1.206,1.206,0,0,1-.409.069Zm0-6a1.2,1.2,0,0,1-.409-.069.934.934,0,0,1-.337-.207,1.189,1.189,0,0,1-.216-.333A1.046,1.046,0,0,1,0,6.989,1.068,1.068,0,0,1,.072,6.6a.9.9,0,0,1,.216-.322.947.947,0,0,1,.337-.207A1.2,1.2,0,0,1,1.033,6H22.967a1.206,1.206,0,0,1,.409.068.935.935,0,0,1,.336.207.9.9,0,0,1,.217.322A1.068,1.068,0,0,1,24,6.989a1.046,1.046,0,0,1-.072.4,1.193,1.193,0,0,1-.217.333.923.923,0,0,1-.336.207A1.206,1.206,0,0,1,22.967,8Zm0-6a1.2,1.2,0,0,1-.409-.068.947.947,0,0,1-.337-.207,1.193,1.193,0,0,1-.216-.334A1.039,1.039,0,0,1,0,.988,1.068,1.068,0,0,1,.072.6.892.892,0,0,1,.288.276.934.934,0,0,1,.625.069,1.2,1.2,0,0,1,1.033,0H22.967a1.206,1.206,0,0,1,.409.069.923.923,0,0,1,.336.207A.9.9,0,0,1,23.928.6,1.068,1.068,0,0,1,24,.988a1.039,1.039,0,0,1-.072.4,1.2,1.2,0,0,1-.217.334.935.935,0,0,1-.336.207A1.206,1.206,0,0,1,22.967,2Z" transform="translate(0 5)" fill="#3f3b3b"></path>
          </svg>
        </button>
        <div className="navbar-collapse collapse" id="menu-3">
          <ul className="navbar-nav ml-auto pt-3 pt-lg-0">
            <li className="nav-item">
            <Link href="/wall">
              <a className="nav-link">Wall</a>
            </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0">Link</a>
            </li>
          </ul>
          <div className="fabrx-header-links ml-0 ml-lg-5">
            <a href="#0" className="btn btn-primary">Button</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
)
