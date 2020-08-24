import { CategoryQuery, CategoryMutation } from './Category';

const resolvers = {
    Query: {
        ...CategoryQuery
    },
    Mutation: {
        ...CategoryMutation
    }
  };

export { resolvers };