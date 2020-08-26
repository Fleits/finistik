import { v4 as generateId } from 'uuid';
import { CategoryDb } from './Category';

const InitTransactions = [
  { id: 'eea7e8ea-70f1-4bf1-a1ae-75b354e3a04e', date: '2020-08-04', amount: 3500, detail: 'Gutshof', categories: ['d40299de-d982-402a-a739-03dee3f56497'] }, 
  { id: '2eed7fe2-0a15-4932-b567-bbff664b0d0e', date: '2020-08-04', amount: 2000, categories: ['25650d22-5470-4daa-98a6-73a430685b48'] },
  { id: 'f75692ea-f7fa-4117-81f5-8ad751d09faa', date: '2020-08-06', amount: 50000, detail: 'Hotel Anzahlung', categories: ['01010ab3-46b5-4150-b108-c241d984f47a'] },
  { id: 'c341ff78-e545-430b-8495-a0967dff5537', date: '2020-08-07', amount: 1450, detail: 'Strandbar', categories: ['d40299de-d982-402a-a739-03dee3f56497', '01010ab3-46b5-4150-b108-c241d984f47a'] },
  { id: '544c854a-4111-49f0-b804-9e7e44e309d1', date: '2020-08-11', amount: 957, detail: 'Gemüse vom Wochenmarkt', categories: ['5f64c3bf-798b-4c7c-951c-94e33ed0c65e'] }
];

const TransactionsDb = InitTransactions;

const transactions = () => TransactionsDb.map(t => ({...t, categories: CategoryDb.filter(c => t.categories.includes(c.id))}));

const addTransaction = (_, {detail, amount, date, categories = []}) =>
{
  const newTransaction = { id: generateId(), name, detail, amount, date, categories };
  TransactionsDb.push(newTransaction);
  return newTransaction;
}

const TransactionsQuery = { transactions };
const TransactionsMutation = { addTransaction };

export { TransactionsQuery, TransactionsMutation };