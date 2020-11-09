import { useApiHandler } from './useApiHandler';
// import { axiosApi } from '@/services/axios';
import axios from 'axios';

const checkAccount = (nickname: string) => axios.post('/api/v1/insta/check', { nickname });

export const useCheckAccount = () => useApiHandler(checkAccount);