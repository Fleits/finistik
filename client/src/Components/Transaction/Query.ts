import { gql } from '@apollo/client';

const GetTransactions = gql`
  query transactions {
    transactions {
      id
      amount
      date
      detail
      categories 
      {
        id
        name
      }
    }
  }
`;

export { GetTransactions };