import { Routing } from '@/pages';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Routing />
    </ChakraProvider>
  );
}

export default App;
