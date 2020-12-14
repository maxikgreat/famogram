import { NextApiRequest, NextApiResponse } from 'next';

import { auth0 } from '@/services/auth0';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const tokenCache = await auth0.tokenCache(req, res);
    const { accessToken } = await tokenCache.getAccessToken({ refresh: true });
    await auth0.handleProfile(req, res, { refetch: true });
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}
