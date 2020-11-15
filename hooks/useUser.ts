import useSWR from 'swr';

import { axiosAuth0 as axios } from '@/services/axios';
import { User } from '@/types';
import { renameKeys } from '@/helpers';

const fetcher = (url: string) => axios.get(url).then(res => {
  const user = { ...res.data };
  renameKeys(user);
  return user;
});

export const useUser = () => {
  const { data, error } = useSWR<User>('/api/v1/me', fetcher);
  return {
    user: data,
    loading: !data && !error,
    error,
  }
}