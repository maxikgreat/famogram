import { NextApiRequest, NextApiResponse } from 'next';
import { initAuth0 } from '@auth0/nextjs-auth0';
import Auth0Lock from 'auth0-lock'

import { renameKeys } from '@/helpers';


interface NextReqRes {
  req: NextApiRequest,
  res: NextApiResponse
}

export const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid email profile offline_access',
  audience: process.env.AUTH0_AUDIENCE,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    storeAccessToken: true,
    storeRefreshToken: true,
  },
  oidcClient: {
    httpTimeout: 10000,
  },
});

export function withAuth(
  callback?: (...args: any) => any,
) {
  return async ({ req, res }: NextReqRes) => {
    try {
      const session = await auth0.getSession(req);
      if (!session) throw new Error('Unauthenticated');
      renameKeys(session.user);
      return {
        props: {
          user: session.user,
          token: session.accessToken,
        }
      }
    } catch (err) {
      return {
        redirect: {
          destination: '/api/v1/login',
          permanent: false
        }
      };
    }
  }
}

let auth0new: Auth0LockStatic;

if (typeof window !== 'undefined') {
  auth0new = new Auth0Lock(
    process.env.AUTH0_CLIENT_ID,
    process.env.AUTH0_DOMAIN,
    {
      allowShowPassword: true,
      rememberLastLogin: true,
      autoclose: true,
      loginAfterSignUp: true,
      auth: {
        redirect: true,
        autoParseHash: true,
        sso: true,
        audience: process.env.AUTH0_AUDIENCE,
        redirectUrl: process.env.AUTH0_REDIRECT_URI,
        responseMode: 'form_post',
        responseType: 'token',
        params: {
          scope: "openid profile email offline_access",
        },
      }
    }
  )
}

export { auth0new };



