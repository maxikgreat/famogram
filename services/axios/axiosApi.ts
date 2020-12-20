import axiosGlobal from 'axios';

console.log("API URL", process.env.API_URL);
const axiosApi = axiosGlobal.create({
  baseURL: process.env.API_URL,
  responseType: 'json',
});

axiosApi.interceptors.request.use(
  async (configuration) => {
    let config = { ...configuration };

    config = {
      ...config,
      headers: {
        ...config.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'application/json',
      }
    };

    return config;
  },
  (error) => Promise.reject(error),
);

export { axiosApi };
