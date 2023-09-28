import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { basicTheme } from '~/shared/config/theme';

import { Routing } from './providers/router';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={basicTheme}>
      <QueryClientProvider client={queryClient}>
        <Routing />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
