import useSWR from 'swr';

import { axiosAuth0 } from '@/services/axios';
import { User } from '@/types';
import { renameKeys } from '@/helpers';

const fetcher = (url: string) => axiosAuth0.get(url).then(res => {
  const user = { ...res.data };
  renameKeys(user);
  return user;
});

export const useUser = () => {
  const { data, error } = useSWR<User>('/me', fetcher, {
    revalidateOnReconnect: true,
  });
  return {
    user: data,
    loading: !data && !error,
    error,
  }
}
