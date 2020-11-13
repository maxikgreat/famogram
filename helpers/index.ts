import { categories, Category } from '@/types';

export const isCategory = (value: string) => categories.includes(value as Category); 

export const isNumber = (string: string) => {
  if (!string) return true;
  return isNaN(Number(string));
} 