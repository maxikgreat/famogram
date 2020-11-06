import { NextApiRequest, NextApiResponse } from 'next';

import { auth0 } from '@/services/auth0';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}