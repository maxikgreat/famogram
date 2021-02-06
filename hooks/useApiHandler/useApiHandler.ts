import { useState } from 'react';
import { AxiosPromise } from 'axios';

export function useApiHandler<D, R>(apiCall: (data: D) => AxiosPromise<R>): [
  (data: D) => Promise<R>,
  { loading: boolean, error: string, data: R | null }
]{
  const [requestState, setRequestState] = useState<{ loading: boolean, error: string, data: R | null }>({
    loading: false,
    error: '',
    data: null,
  });

  const handler = async (data: D) => {
    setRequestState({ error: '', loading: true, data: null });
    try {
      const response = await apiCall(data);
      setRequestState({ error: '', loading: false, data: response.data });
      return Promise.resolve(response.data);
    } catch ({ response }) {
      const error = response?.data?.message ?? 'Oooops, something went wrong';
      setRequestState({
        error,
        loading: false,
        data: null,
      });
      return Promise.reject(error);
    }
  };
  
  return [handler, {...requestState}];
}
