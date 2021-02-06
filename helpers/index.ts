import * as yup from 'yup';
import { categories, Category } from '../types';

export const isCategory = (value: string) => categories.includes(value as Category);

export const isNumber = (string: string) => {
  if (!string) return false;
  return !Number.isNaN(Number(string));
};

export const isEmail = (value: string) => {
  const email = yup.string().email().required();
  return email.isValidSync(value);
};

export const renameKeys = (obj: any) => {
  const newObj = { ...obj };
  // eslint-disable-next-line
  for (const key of newObj) {
    if (key.includes('https://hativi.com/')) {
      const newKey = key.split('https://hativi.com/')[1];
      newObj[newKey] = newObj[key];
      delete newObj[key];
    }
  }
  return newObj;
};
