import { useApiHandler } from './useApiHandler';
import { axiosApi as axios } from '@/services/axios';
import { InstaUser, Metadata } from '@/types';

interface MetadataWithId {
  userId: string,
  metadata: Metadata,
}

const checkAccount = (nickname: string) => axios.post('/api/v1/insta/check', { nickname });
const updateMetadata = (data: MetadataWithId) => axios.patch(`api/v1/auth0/user`, data);

export const useCheckAccount = () => useApiHandler<string, InstaUser>(checkAccount);
export const useUpdateMetadata = () => useApiHandler<MetadataWithId, any>(updateMetadata);
