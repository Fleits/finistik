import { gql } from '@apollo/client';

const GetCategories = gql`
  query categories {
    categories {
      id
      name
      parent
    }
  }
`;

export { GetCategories };