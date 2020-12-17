import { NextApiRequest, NextApiResponse } from 'next';

interface Auth0Request extends NextApiRequest {
  body: {
    access_token: string,
    expires_in: string,
    token_type: string,
    state: string,
  }
}

export default async (req: Auth0Request, res: NextApiResponse) => {
  try {
    res.redirect('/');
  } catch (e) {
    res.status(e.status || 400).end(e.message);
  }
}
