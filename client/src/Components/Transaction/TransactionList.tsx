import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { LoadingIndicator } from 'Components/LoadingIndicator';
import { formatAmount } from 'Helper/FormatAmount';

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

function TransactionList()
{
  const { loading, error, data: { transactions = [] } = {} } = useQuery(GetTransactions);

  if(error) return <p>Error!</p>;

  return (
    <div style={{ position: 'relative' }}>
      {transactions.map((t: any) => (
        <p>
          {t.date}
          -
          {formatAmount(t.amount)}
          -
          {t.detail}
          -
          { t.categories.map((c: any) => c.name).join(', ') }
        </p>
      ))}
      {loading && (<LoadingIndicator overlay />)}
    </div>
  );
}

export { TransactionList };