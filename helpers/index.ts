import { categories, Category } from '@/types';

export const isCategory = (value: string) => categories.includes(value as Category); 