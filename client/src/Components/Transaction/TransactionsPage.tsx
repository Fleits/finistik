import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { LoadingIndicator } from 'Components/LoadingIndicator';
import { TransactionList } from './TransactionList';

export const GetTransactions = gql`
  query transactions {
    transactions {
      id
      amount
      date
      detail
      categories 
      {
        name
      }
    }
  }
`;

function TransactionsPage()
{
  const { loading, error, data: { transactions = [] } = {} } = useQuery(GetTransactions);

  if(error) return <p>Error!</p>;

  return (
    <div style={{ position: 'relative' }}>
      <TransactionList transactions={transactions} />
      {loading && (<LoadingIndicator overlay />)}
    </div>
  );
}

export { TransactionsPage };