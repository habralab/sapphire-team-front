import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { basicTheme } from '~/shared/config';

import { LayoutProvider } from './providers/layout';
import { Routing } from './providers/router';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={basicTheme}>
      <LayoutProvider>
        <QueryClientProvider client={queryClient}>
          <Routing />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </LayoutProvider>
    </ChakraProvider>
  );
}

export default App;
