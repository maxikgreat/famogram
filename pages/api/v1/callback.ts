import { NextApiRequest, NextApiResponse } from 'next';

import { auth0 } from '@/services/auth0';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/' });
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).end(e.message);
  }
}