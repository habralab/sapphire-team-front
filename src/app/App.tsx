import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';

import { basicTheme } from '~/shared/config';
import { useIsMobile } from '~/shared/hooks';

import { Routing } from './providers/router';

const queryClient = new QueryClient();

function App() {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [isMobile]);

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
