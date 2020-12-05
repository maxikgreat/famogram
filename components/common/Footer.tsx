import {VFC} from 'react';
import Link from 'next/link';
import {User} from '@/types';

interface FooterProps {
  user?: User,
  loading: boolean,
}


export const Footer: VFC<FooterProps> = ({ user, loading }) => (
  <footer className="fabrx-footer py-5 mt-5">
    <div className="container">
      <div className={`row align-items-${!user ? 'center' : 'start' }`}>
        <div className="col-lg-3 col-sm-3 mt-0 mb-3 text-center text-sm-left">
          <Link href="/">
            <a className="navbar-brand logo m-0 mr-sm-4">Hativi</a>
          </Link>
        </div>
        <div className="col-lg-6 col-sm-9">
          <div className="row">
            <div className={`col-12 col-sm-6 ${loading && 'd-flex'} text-center text-sm-left mb-4 mb-sm-0 justify-content-center`}>
              {
                loading
                  ? <div className="mt-4 spinner-border spinner-border-sm spinner-fill" />
                  : user
                  ? (
                    <>
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
                    </>
                  ) : null
              }
            </div>
            <div className={`col-12 col-sm-${!user ? '12' : '6'} mb-4 mb-sm-0 text-center text-sm-${!user ? 'center' : 'left'} px-4 p-sm-0`}>
              <span>
                Faced with some issues or have a proposal to improve?<br/>
                <a
                  href="mailto:maximvasylenko228322@gmail.com"
                  style={{ textDecoration: 'underline', fontWeight: 'bold' }}
  
                >Send an email!</a>
              </span>
            </div>
          </div>
          </div>
        <div className="col-lg-3 col-sm-12 mb-0 mb-sm-3 mt-3">
          <div className="fabrx-social text-center text-lg-right">
            <a href="https://www.facebook.com/hativifb" target="_blank">
              <svg data-name="Icon/Social/OutlineFacebook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path data-name="Icon Color" d="M3.525,20.475a11.985,11.985,0,1,1,16.95-16.95,11.985,11.985,0,1,1-16.95,16.95ZM1.5,12A10.5,10.5,0,1,0,12,1.5,10.512,10.512,0,0,0,1.5,12Zm9.262,5.625V12.488H9V10.5h1.8V9a2.424,2.424,0,0,1,2.625-2.625A11.921,11.921,0,0,1,15,6.45v1.8H13.912c-.862,0-1.012.412-1.012.975V10.5h2.025l-.262,1.987H12.9v5.137Z" fill="#959393"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/hati.vi" target="_blank">
              <svg data-name="Icon/Social/OutlineInstagram" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path data-name="Icon Color" d="M3.525,20.475a11.985,11.985,0,1,1,16.95-16.95,11.985,11.985,0,1,1-16.95,16.95ZM1.5,12A10.5,10.5,0,1,0,12,1.5,10.512,10.512,0,0,0,1.5,12Zm8.137,6.338a4.248,4.248,0,0,1-1.612-.3,3.941,3.941,0,0,1-1.237-.825,3.116,3.116,0,0,1-.825-1.237,5.11,5.11,0,0,1-.3-1.613c-.038-.637-.038-.833-.038-2.363s0-1.724.038-2.363a4.248,4.248,0,0,1,.3-1.612,3.926,3.926,0,0,1,.825-1.237,3.123,3.123,0,0,1,1.237-.825,5.1,5.1,0,0,1,1.612-.3c.638-.038.834-.038,2.363-.038s1.725,0,2.363.038a4.256,4.256,0,0,1,1.613.3,3.945,3.945,0,0,1,1.237.825,3.135,3.135,0,0,1,.825,1.237,5.133,5.133,0,0,1,.3,1.612c.038.638.038.834.038,2.363s0,1.725-.038,2.363a4.256,4.256,0,0,1-.3,1.613,3.977,3.977,0,0,1-.825,1.237,3.135,3.135,0,0,1-1.237.825,5.124,5.124,0,0,1-1.613.3c-.637.038-.833.038-2.363.038S10.275,18.375,9.637,18.337Zm-.971-11-.041.014A2.153,2.153,0,0,0,7.387,8.588a2.907,2.907,0,0,0-.225,1.125c-.037.6-.037.791-.037,2.287v2.25a3.7,3.7,0,0,0,.211,1.083l.014.042a2.146,2.146,0,0,0,1.237,1.237,2.894,2.894,0,0,0,1.125.225c.6.038.791.038,2.287.038h2.25a3.727,3.727,0,0,0,1.078-.21l.047-.015a2.153,2.153,0,0,0,1.237-1.237,2.894,2.894,0,0,0,.225-1.125c.038-.6.038-.792.038-2.288V9.75a3.742,3.742,0,0,0-.21-1.079l-.015-.046a2.16,2.16,0,0,0-1.237-1.238,2.907,2.907,0,0,0-1.125-.225c-.6-.037-.792-.037-2.288-.037H9.75A3.746,3.746,0,0,0,8.666,7.336ZM8.7,12A3.307,3.307,0,1,1,12,15.3,3.264,3.264,0,0,1,8.7,12Zm1.5,0A1.8,1.8,0,1,0,12,10.2,1.824,1.824,0,0,0,10.2,12Zm4.274-3.188a.713.713,0,1,1,.713.712A.713.713,0,0,1,14.475,8.813Z" fill="#959393"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
