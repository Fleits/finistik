import { gql } from '@apollo/client';

const GetCategories = gql`
  query categories {
    categories {
      id
      name
    }
  }
`;

export { GetCategories };