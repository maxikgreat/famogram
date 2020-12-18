import express, { Request, Response } from 'express';
import next from 'next';
import {auth, RequestContext, requiresAuth, ResponseContext} from 'express-openid-connect';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

export interface RequestAuth0 extends Request {
  oidc: RequestContext
}
export interface ResponseAuth0 extends Response {
  oidc: ResponseContext
}

(async () => {
  try {
    // await app.prepare();
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
        scope: 'openid email profile offline_access',
      }
    }));
    
    server.use(express.json());
    
    // server.get('/find_blogger', requiresAuth(), (req, res) => {
    //   const parsedUrl = parse(req.url, true)
    //   const { pathname, query } = parsedUrl;
    //   // @ts-ignore
    //   console.log('req', req)
    //   // @ts-ignore
    //   console.log('res', res);
    //   app.render(req, res, '/find_blogger', { id: '123'});
    // });
    //
    // server.all('*', (req, res) => {
    //   // @ts-ignore
    //   console.log(req.oidc)
    //   // @ts-ignore
    //   console.log(res.oidc);
    //   const parsedUrl = parse(req.url, true);
    //   handle(req, res, parsedUrl);
    // });
    
    // @ts-ignore
    server.get('/', (req: RequestAuth0, res: ResponseAuth0) => {
      res.status(200).json(req.oidc.accessToken);
    });
    
    server.get('/secret', requiresAuth(), (req, res) => {
      res.status(200).json({ message: 'hello'});
    })
    

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    })
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
