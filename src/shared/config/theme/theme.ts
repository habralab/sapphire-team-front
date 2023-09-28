import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

/**
 * Можно посмотреть исходники и понять, что можно переопределить
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src
 */

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'bold',
  },
});

export const basicTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: { Button },
  styles: {
    global: {
      body: {
        fontSize: 'sm',
      },
    },
  },
  colors: {
    purple: {
      700: '#4A00B5',
      900: '#25005B',
      100: '#E6DAF7',
    },
  },
});
