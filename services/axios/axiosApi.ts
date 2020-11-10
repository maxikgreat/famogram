import axiosGlobal from 'axios';

const axiosApi = axiosGlobal.create({
  baseURL: 'http://localhost:3001',
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