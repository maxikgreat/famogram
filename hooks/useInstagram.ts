import { useApiHandler } from './useApiHandler';
import { axiosApi } from '@/services/axios';

const checkAccount = (nickname: string) => axiosApi.post('/api/v1/insta/check', nickname);

export const useCheckAccount = () => useApiHandler(checkAccount);