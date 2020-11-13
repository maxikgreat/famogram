import { NextApiRequest, NextApiResponse } from 'next';

import { initAuth0 } from '@auth0/nextjs-auth0';

interface NextReqRes {
  req: NextApiRequest,
  res: NextApiResponse
}

export const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid email profile',
  audience: process.env.AUTH0_AUDIENCE,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    storeAccessToken: true,
    storeRefreshToken: true,
  },
});

export function withAuth<T>(
  callback?: (...args: any) => any,
) {
  return async ({ req, res }: NextReqRes) => {
    try {
      const session = await auth0.getSession(req);
      if (!session) throw new Error('Unauthenticated');
      if (callback) callback(session.user.user_metadata);
      return {
        props: {
          user: session.user
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
