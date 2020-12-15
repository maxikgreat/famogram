import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body);
    res.redirect('/');
  } catch (e) {
    res.status(e.status || 400).end(e.message);
  }
}
