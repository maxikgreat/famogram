import { useApiHandler } from './useApiHandler';
import { axiosApi as axios } from '@/services/axios';
import { InstaUser, Metadata } from '@/types';

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

const checkAccount = (nickname: string) => axios.post('/api/v1/insta/check', { nickname });
const updateMetadata = (data: ExtendedMetadata) => axios.patch(`api/v1/auth0/user`, data);
const updateEmail = (data: NewEmail) => axios.patch(`api/v1/auth0/user/email`, data);
const updatePassword = (data: NewPassword) => axios.post(`api/v1/auth0/user/password`, data);

export const useCheckAccount = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return useApiHandler<string, InstaUser>(checkAccount);
} 

export const useUpdateMetadata = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return useApiHandler<ExtendedMetadata, any>(updateMetadata);
} 

export const useUpdateEmail = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return useApiHandler<NewEmail, any>(updateEmail);
}

export const useUpdatePassword = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return useApiHandler<NewPassword, { ticket: string }>(updatePassword);
}