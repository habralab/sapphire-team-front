import { ChakraProvider, createLocalStorageManager, ColorMode } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { setDefaultOptions } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { basicTheme } from '~/shared/config';

import { ApiProvider } from './providers/api';
import { Routing } from './providers/router';

const queryClient = new QueryClient();

const colorModeManager = {
  ...createLocalStorageManager('chakra-ui-color-mode'),
  get: () => 'light' as ColorMode,
};

setDefaultOptions({ locale: ru });

function App() {
  return (
    <ChakraProvider theme={basicTheme} colorModeManager={colorModeManager}>
      <ApiProvider>
        <QueryClientProvider client={queryClient}>
          <Routing />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ApiProvider>
    </ChakraProvider>
  );
}

export default App;
