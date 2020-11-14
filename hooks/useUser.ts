import useSWR from 'swr';

import { axiosAuth0 as axios } from '@/services/axios';
import { User } from '@/types';

const fetcher = (url: string) => axios.get(url).then(res => {
  const user = { ...res.data };
  for (let key in user) {
    if (key.includes('https://hativi.com/')) {
      const newKey = key.split('https://hativi.com/')[1]
      user[newKey] = user[key];
      delete user[key];
    }
  }
  return user;
});

export const useUser = () => {
  const { data, error } = useSWR<User>('/api/v1/me', fetcher);
  console.log(data);
  return {
    user: data,
    loading: !data && !error,
    error,
  }
}