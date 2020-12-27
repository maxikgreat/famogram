import Link from 'next/link';
import {useEffect, useState} from 'react';
import useTranslation from 'next-translate/useTranslation';

import {Logo} from '../common';
import {User} from '@/types';

interface HeaderProps {
  user?: User,
  loading: boolean,
}

interface AvatarDropdownProps {
  name: string,
  photo: string,
}

const AvatarDropdown = ({ name, photo }: AvatarDropdownProps) => {
  const {t} = useTranslation('common');
  return (
    <div className="dropdown">
      <a href="#" role="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        <div className="fabrx-avatar mr-2 mr-sm-0">
          <img src={photo} alt="Avatar" />
        </div>
        <span className="avatar-user mr-2">{name}</span>
        <svg data-name="Icon/Arrows/Chevron/Down" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24.091 24">
          <path data-name="Icon Color" d="M-2.182,24,0,21.818-9.818,12,0,2.182-2.182,0l-12,12Z" transform="translate(0.091 4.909) rotate(-90)" fill="#3f3b3b" />
        </svg>
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
        <Link href="/find_blogger">
          <a className="nav-link">{t('nav.findBlogger')}</a>
        </Link>
        <Link href="/instagram_profile">
          <a className="nav-link">{t('nav.profile', {social: 'Instagram'})}</a>
        </Link>
        <Link href="#">
          <a className="nav-link disabled">{t('nav.profile', {social: 'TikTok'})}</a>
        </Link>
        <Link href="/settings">
          <a className="nav-link">{t('nav.settings')}</a>
        </Link>
        <a className="nav-link" href="/logout">{t('nav.logout')}</a>
      </div>
    </div>
  )
};

export const Header = ({ user, loading }: HeaderProps) => {
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 767) {
        return setMobile(true);
      }
      setMobile(false);
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  },[]);
  
  const [isMobile, setMobile] = useState(false);
  
  const {t} = useTranslation('common');
  
  return (
    <header className="fabrx-header bg-white sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand has-header-inner align-items-center position-relative">
          <div className="position-absolute logo-header" style={{top: isMobile ? -35 : -97}}>
            <Logo isMobile={isMobile} />
          </div>
          <div className="navbar-collapse justify-content-end">
            <div className="fabrx-header-links ml-0 ml-lg-5">
              {loading
                ? <div className="spinner-border spinner-border-sm spinner-fill" />
                : user && Object.keys(user).length !== 0
                  ? <AvatarDropdown
                    name={user.nickname}
                    photo={user.user_metadata?.instagram?.user.photoUrl ?? user.picture}
                  />
                  : <a className="btn btn-primary" href="/login">{t('nav.login')}</a>
              }
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

