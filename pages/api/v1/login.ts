import { NextApiRequest, NextApiResponse } from 'next';

import { auth0, auth0new } from '@/services/auth0';


interface NextApiRequestWithRedirect extends  NextApiRequest {
  query: {
    redirectTo: string, // maybe can be undefined
    prompt: string,
  }
}

export default async (req: NextApiRequestWithRedirect, res: NextApiResponse) => {
    // const {query: { redirectTo, prompt }} = req;
    // await auth0.handleLogin(req, res, {
    //   authParams: prompt ? {prompt: 'none'} : undefined,
    //   redirectTo: redirectTo ? redirectTo : '/first_enter'
    // });
  console.log("BODY", req.body);
  res.redirect('/first_enter');
}
