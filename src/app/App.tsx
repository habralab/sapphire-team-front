import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';

import { basicTheme } from '~/shared/config/theme';

import { Routing } from './providers/router';

function App() {
  return (
    <StrictMode>
      <ChakraProvider theme={basicTheme}>
        <Routing />
      </ChakraProvider>
    </StrictMode>
  );
}

export default App;
