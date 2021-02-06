import { categories, Category } from '../types';
import * as yup from 'yup';

export const isCategory = (value: string) => categories.includes(value as Category);

export const isNumber = (string: string) => {
  if (!string) return false;
  return !Number.isNaN(Number(string));
};

export const isEmail = (value: string) => {
  const email = yup.string().email().required();
  return email.isValidSync(value);
};

export const renameKeys = (obj: any)=> {
  if (!obj || !Object.keys(obj).length) return null;
  const newObj = { ...obj };
  for (const key in newObj) {
    if (key.includes('https://hativi.com/')) {
      const newKey = key.split('https://hativi.com/')[1];
      newObj[newKey] = newObj[key];
      delete newObj[key];
    }
  }
  return newObj;
};
