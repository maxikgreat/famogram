import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { auth0 } from '@/services/auth0';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await auth0.getSession(req);
    console.log(session);
    return res.json(session);
  } catch (e) {
    res.status(e.status || 400).end(e.message);
  }
}