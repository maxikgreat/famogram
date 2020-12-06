import { NextApiRequest, NextApiResponse } from 'next';

import { auth0 } from '@/services/auth0';

interface NextApiRequestWithRedirect extends  NextApiRequest {
  query: {
    redirectTo: string, // maybe can be undefined
  }
}

export default async (req: NextApiRequestWithRedirect, res: NextApiResponse) => {
  try {
    const {query: { redirectTo }} = req;
    console.log('redirectTo', redirectTo);
    await auth0.handleLogin(req, res, {
      redirectTo: redirectTo ? redirectTo : '/first_enter'
    });
  } catch (e) {
    res.status(e.status || 400).end(e.message);
  }
}
