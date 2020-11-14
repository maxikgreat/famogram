import { useApiHandler } from './useApiHandler';
import { axiosApi as axios } from '@/services/axios';
import { InstaUser, Metadata } from '@/types';

const checkAccount = (nickname: string) => axios.post('/api/v1/insta/check', { nickname });
const updateMetadata = (metadata: any) => axios.patch(`api/v1/auth0/user`, metadata);

export const useCheckAccount = () => useApiHandler<string, InstaUser>(checkAccount);
export const useUpdateMetadata = () => useApiHandler<Metadata, any>(updateMetadata);
