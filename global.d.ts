import { OpenidRequest, OpenidResponse } from 'express-openid-connect'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production',
      PORT: string,
      AUTH0_DOMAIN: string,
      AUTH0_CLIENT_ID: string,
      AUTH0_CLIENT_SECRET: string,
      AUTH0_COOKIE_SECRET: string,
      AUTH0_AUDIENCE: string,
      API_URL: string,
      BASE_URL: string,
      ISSUER_BASE_URL: string,
    }
  }
}

export {}
