import axiosGlobal from 'axios';

const axiosAuth0 = axiosGlobal.create({
  baseURL: process.env.BASE_URL,
  responseType: 'json',
});

axiosAuth0.interceptors.response.use(
  response => response,
  async ({ response, config }) =>  {
    if (response.status === 401) {
      try {
        // console.log("HELLO");
        // const session = await auth0.getSession(config);
        
        // console.log(session);
        // const tokenCache = auth0.tokenCache(config, response);
        // await tokenCache.getAccessToken();
        // return axiosAuth0(config);
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
)


export { axiosAuth0 };
