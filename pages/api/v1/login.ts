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
    await auth0.handleLogin(req, res, {
      redirectTo: redirectTo ? redirectTo : '/find_blogger'
    });
  } catch (e) {
    res.status(e.status || 400).end(e.message);
  }
}
