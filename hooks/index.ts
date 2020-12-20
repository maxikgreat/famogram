import { useApiHandler } from './useApiHandler';
import { axiosApi } from '@/services/axios';
import { InstaUser, Metadata, User } from '@/types';

interface ExtendedMetadata {
  userId: string,
  metadata: Metadata,
}

interface NewEmail {
  userId: string,
  newEmail: string,
}

interface NewPassword {
  userId: string,
}

const checkAccount = (nickname: string) => axiosApi.post('/api/v1/insta/check', { nickname });
const updateMetadata = (data: ExtendedMetadata) => axiosApi.patch(`api/v1/auth0/user`, data);
const updateEmail = (data: NewEmail) => axiosApi.patch(`api/v1/auth0/user/email`, data);
const updatePassword = (data: NewPassword) => axiosApi.post(`api/v1/auth0/user/password`, data);
const getBloggers = () => axiosApi.get('api/v1/auth0/bloggers');

export const useCheckAccount = (token: string) => {
  axiosApi.defaults.headers.Authorization = token;
  return useApiHandler<string, InstaUser>(checkAccount);
}

export const useUpdateMetadata = (token: string) => {
  axiosApi.defaults.headers.Authorization = token;
  return useApiHandler<ExtendedMetadata, any>(updateMetadata);
}

export const useUpdateEmail = (token: string) => {
  axiosApi.defaults.headers.Authorization = token;
  return useApiHandler<NewEmail, any>(updateEmail);
}

export const useUpdatePassword = (token: string) => {
  axiosApi.defaults.headers.Authorization = token;
  return useApiHandler<NewPassword, { ticket: string }>(updatePassword);
}

export const useGetBloggers = (token: string) => {
  axiosApi.defaults.headers.Authorization = token;
  return useApiHandler<undefined, User[]>(getBloggers);
}
