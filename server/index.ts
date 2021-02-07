import express, { Request, Response } from 'express';
import next from 'next';
import { parse } from 'url';
import { auth, RequestContext, ResponseContext } from 'express-openid-connect';
import sslRedirect from 'heroku-ssl-redirect';

import routes from './routes';

export interface RequestAuth0 extends Request {
  oidc: RequestContext
}
export interface ResponseAuth0 extends Response {
  oidc: ResponseContext
}

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(auth({
      authRequired: false,
      auth0Logout: true,
      secret: process.env.AUTH0_COOKIE_SECRET,
      clientID: process.env.AUTH0_CLIENT_ID,
      baseURL: process.env.BASE_URL,
      issuerBaseURL: process.env.ISSUER_BASE_URL,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      authorizationParams: {
        response_type: 'code',
        audience: process.env.AUTH0_AUDIENCE,
        scope: 'openid email profile offline_access read:users',
      },
      routes: {
        login: false,
        callback: '/callback',
      },
    }));
    
    server.use(express.json());
    if (process.env.NODE_ENV === 'production') {
      server.use(sslRedirect());
    }
    server.use(routes);

    server.all('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
    
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on ${process.env.BASE_URL}:${port} - env ${process.env.NODE_ENV}`);
    })
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();

export { app };
