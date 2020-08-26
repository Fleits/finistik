import { CategoryQuery, CategoryMutation } from './Category';
import {TransactionsQuery, TransactionsMutation } from './Transaction';

const resolvers = {
    Query: {        
        ...CategoryQuery,
        ...TransactionsQuery
    },
    Mutation: {
        ...CategoryMutation,
        ...TransactionsMutation
    }
  };

export { resolvers };