import { ChakraProvider, createLocalStorageManager, ColorMode } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { basicTheme } from '~/shared/config';

import { ApiProvider } from './providers/api';
import { LayoutProvider } from './providers/layout';
import { Routing } from './providers/router';

const queryClient = new QueryClient();

const colorModeManager = {
  ...createLocalStorageManager('chakra-ui-color-mode'),
  get: () => 'light' as ColorMode,
};

function App() {
  return (
    <ChakraProvider theme={basicTheme} colorModeManager={colorModeManager}>
      <ApiProvider>
        <LayoutProvider>
          <QueryClientProvider client={queryClient}>
            <Routing />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </LayoutProvider>
      </ApiProvider>
    </ChakraProvider>
  );
}

export default App;
