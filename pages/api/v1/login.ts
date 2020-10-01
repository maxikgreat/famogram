import { NextApiRequest, NextApiResponse } from 'next';

import { auth0 } from '@/services/auth0';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (e) {
    res.status(e.status || 400).end(e.message);
  }
}