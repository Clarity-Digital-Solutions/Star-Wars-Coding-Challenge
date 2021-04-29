import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'cross-fetch/polyfill';

export const client = new ApolloClient({
  uri: 'https://graphql.org/swapi-graphql',
  cache: new InMemoryCache(),
});
