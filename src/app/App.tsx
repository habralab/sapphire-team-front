import { ChakraProvider } from '@chakra-ui/react';
import { Routing } from '~/pages';

function App() {
  return (
    <ChakraProvider>
      <Routing />
    </ChakraProvider>
  );
}

export default App;
