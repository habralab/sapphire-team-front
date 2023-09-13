import { ChakraProvider } from '@chakra-ui/react';

import { basicTheme } from '~/shared/config/theme';

import { Routing } from './providers/router';

function App() {
  return (
    <ChakraProvider theme={basicTheme}>
      <Routing />
    </ChakraProvider>
  );
}

export default App;
