import { useApiHandler } from './useApiHandler';
import { axiosApi as axios } from '@/services/axios';

const checkAccount = (nickname: string) => axios.post('/api/v1/insta/check', { nickname });

export const useCheckAccount = () => useApiHandler(checkAccount);
