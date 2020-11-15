import { useApiHandler } from './useApiHandler';
import { axiosApi as axios } from '@/services/axios';
import { InstaUser, Metadata } from '@/types';

interface MetadataWithId {
  userId: string,
  metadata: Metadata,
}

const checkAccount = (nickname: string) => axios.post('/api/v1/insta/check', { nickname });
const updateMetadata = (data: MetadataWithId) => axios.patch(`api/v1/auth0/user`, data);

export const useCheckAccount = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return useApiHandler<string, InstaUser>(checkAccount);
} 

export const useUpdateMetadata = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return useApiHandler<MetadataWithId, any>(updateMetadata);
} 
