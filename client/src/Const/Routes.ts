const Home = { path: '/', name: 'Home' };
const AddTransaction = { path: '/add', name: 'Hinzufügen' };
const Categories = { path: '/categories', name: 'Kategorien' };
const TransactionList = { path: '/transactions', name: 'Transaktionen' };

export const Routes = {
  All: [Home, AddTransaction, TransactionList, Categories],
  Home,
  AddTransaction,
  TransactionList,
  Categories
};