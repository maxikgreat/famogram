import { categories, Category, InstaUser, Metadata } from '@/types';
import * as yup from 'yup';

export const isCategory = (value: string) => categories.includes(value as Category);

export const isNumber = (string: string) => {
  if (!string) return false;
  return !isNaN(Number(string));
}

export const isEmail = (value: string) => {
  const email = yup.string().email().required();
  return email.isValidSync(value)
}

export const renameKeys = (obj: any) => {
  for (let key in obj) {
    if (key.includes('https://hativi.com/')) {
      const newKey = key.split('https://hativi.com/')[1]
      obj[newKey] = obj[key];
      delete obj[key];
    }
  }
}
