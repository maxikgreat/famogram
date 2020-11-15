import { NextApiRequest, NextApiResponse } from 'next';

import { axiosAuth0 as axios } from '@/services/axios';
import { auth0 } from '@/services/auth0';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleCallback(req, res, { 
      redirectTo: '/profile',
    });
  } catch (e) {
    res.status(e.status || 400).end(e.message);
  }
}