import { useState } from 'react';
import { AxiosPromise } from 'axios';

// import { axiosApi } from '@/services/axios';

export function useApiHandler(apiCall: any): [
  (data: any) => Promise<void>,
  { loading: boolean, error: string, data: any }
]{
  const [requestState, setRequestState] = useState<{ loading: boolean, error: string, data: any | null }>({
    loading: false,
    error: '',
    data: null,
  });

  const handler = async (data: any) => {
    setRequestState({ error: '', loading: true, data: null });
    try {
      const response = await apiCall(data);
      setRequestState({ error: '', loading: false, data: response.data });
      return Promise.resolve();
    } catch ({ response }) {
      const error = (response && response.data) || 'Ooops, something went wrong!';
      setRequestState({
        error,
        loading: false,
        data: null,
      });
      return Promise.reject(error);
    }
  }
  return [handler, {...requestState}];
}