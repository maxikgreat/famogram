import Link from 'next/link';

import { User } from '@/types';
interface HeaderProps {
  user?: User,
  loading: boolean,
}

interface AvatarDropdownProps {
  name: string,
  photo: string,
}

const AvatarDropdown = ({ name, photo }: AvatarDropdownProps) => (
  <div className="dropdown">
    <a href="#" role="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
      <div className="fabrx-avatar mr-2 mr-sm-0">
        <img src={photo} alt="Avatar" />
      </div>
      <span className="avatar-user mr-2">{name}</span>
      <svg data-name="Icon/Arrows/Chevron/Down" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24.091 24">
        <path data-name="Icon Color" d="M-2.182,24,0,21.818-9.818,12,0,2.182-2.182,0l-12,12Z" transform="translate(0.091 4.909) rotate(-90)" fill="#3f3b3b"></path>
      </svg>
    </a>
    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
      <Link href="/find_bloger">
        <a className="nav-link">Find a blogger</a>
      </Link>
      <Link href="/instagram_profile">
        <a className="nav-link">Instagram profile</a>
      </Link>
      <Link href="#">
        <a className="nav-link disabled">Tiktok profile (soon)</a>
      </Link>
      <Link href="/settings">
        <a className="nav-link">Settings</a>
      </Link>
      <Link href="/api/v1/logout">
        <a className="nav-link">Logout</a>
      </Link>
    </div>
  </div>
)

export const Header = ({ user, loading }: HeaderProps) => {
  
  return (
    <header className="fabrx-header bg-white mt-md-5 sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand has-header-inner align-items-center">
          <Link href="/">
            <a className="navbar-brand logo">Hativi</a>
          </Link>
          <div className="navbar-collapse justify-content-end">
            {/*{!user && (*/}
            {/*  <ul className="navbar-nav ml-auto pr-3 pr-lg-0">*/}
            {/*    <li className="nav-item">*/}
            {/*      <Link href="/find_bloger">*/}
            {/*        <a className="nav-link">Find bloger</a>*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*)}*/}
            <div className="fabrx-header-links ml-0 ml-lg-5">
              {loading
                ? <div className="spinner-border spinner-border-sm spinner-fill" />
                : user
                  ? <AvatarDropdown
                      name={user.nickname}
                      photo={user.user_metadata?.instagram?.user.photoUrl ?? user.picture}
                    />
                  : <Link href="/api/v1/login">
                      <a className="btn btn-primary">Login</a>
                    </Link>
              }
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
