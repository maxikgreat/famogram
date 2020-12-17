import express from 'express';
import next from 'next';
import { parse } from 'url';
import {auth, requiresAuth} from 'express-openid-connect';

import apiV1 from './pageApi/v1';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.use(express.json());
    server.use(auth({
      authRequired: false,
      issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
      clientID: process.env.AUTH0_CLIENT_ID,
      secret: process.env.AUTH0_CLIENT_SECRET,
      baseURL: process.env.BASE_URL,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      authorizationParams: {
        response_type: 'code',
        audience: process.env.AUTH0_AUDIENCE,
        scope: 'openid email profile offline_access',
      }
    }));
    // server.use(apiV1);
    
    server.get('/find_blogger', requiresAuth(), (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl;
      // @ts-ignore
      console.log(req.oidc)
      // @ts-ignore
      console.log(res.oidc);
      app.render(req, res, '/find_blogger', { id: '123'});
    });
    
    server.all('*', (req, res) => {
      // @ts-ignore
      console.log(req.oidc)
      // @ts-ignore
      console.log(res.oidc);
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    })
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();

export { app };
