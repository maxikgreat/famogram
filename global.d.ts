declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production',
      PORT: string,
      AUTH0_DOMAIN: string,
      AUTH0_CLIENT_ID: string,
      AUTH0_CLIENT_SECRET: string,
      AUTH0_REDIRECT_URI: string,
      AUTH0_POST_LOGOUT_REDIRECT_URI: string,
      AUTH0_COOKIE_SECRET: string,
      AUTH0_AUDIENCE: string,
      API_URL: string,
    }
  }
}

export {}