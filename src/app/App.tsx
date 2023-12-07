import { ChakraProvider, createLocalStorageManager, ColorMode } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// eslint-disable-next-line import/no-duplicates
import { setDefaultOptions } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import ru from 'date-fns/locale/ru';

import { useIsMobile } from '~/shared/hooks';

import { ApiProvider } from './providers/api';
import { RouterProvider } from './providers/router';
import { desktopTheme, mobileTheme } from './providers/theme';

const queryClient = new QueryClient();

const colorModeManager = {
  ...createLocalStorageManager('chakra-ui-color-mode'),
  get: () => 'light' as ColorMode,
};

setDefaultOptions({ locale: ru });

function App() {
  const isMobile = useIsMobile();

  return (
    <ChakraProvider
      theme={isMobile ? mobileTheme : desktopTheme}
      colorModeManager={colorModeManager}
    >
      <ApiProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ApiProvider>
    </ChakraProvider>
  );
}

export default App;
