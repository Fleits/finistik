import React from 'react';
import { useQuery } from '@apollo/client';
import { LoadingIndicator } from 'Components/LoadingIndicator';
import { TransactionList } from './TransactionList';
import { GetTransactions } from './Query';

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