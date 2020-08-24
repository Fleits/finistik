import { ApolloServer } from 'apollo-server';
import { importSchema  } from 'graphql-import';
import { resolvers } from './Resolvers'

const typeDefs = importSchema('src/schema.graphql');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => 
{
  console.log(`🚀 Server ready at ${url}`)
});