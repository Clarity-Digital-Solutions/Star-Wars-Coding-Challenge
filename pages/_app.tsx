import { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../settings/theme';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
