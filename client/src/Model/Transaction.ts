import { Category } from '.';

type Transaction = {
  id: string
  detail: string
  amount: number
  date: string
  categories: Category[]
};

export type { Transaction };