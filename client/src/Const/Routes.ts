const Home = { path: '/', name: 'Home' };
const AddTransaction = { path: '/add', name: 'Hinzufügen' };
const TransactionList = { path: '/transactions', name: 'Transaktionen' };

export const Routes = {
  All: [Home, AddTransaction, TransactionList],
  Home,
  AddTransaction,
  TransactionList
};