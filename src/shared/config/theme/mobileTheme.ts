import { extendTheme, defineStyleConfig } from '@chakra-ui/react';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

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

const Heading = defineStyleConfig({
  variants: {
    h3: {
      fontFamily: `'Inter', sans-serif`,
    },
  },
});

export const mobileTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components: { Button, Heading },
  styles: {
    global: {
      body: {
        fontSize: 'sm',
        color: 'gray.900',
      },
    },
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Raleway', sans-serif`,
  },
  colors: {
    purple: {
      100: '#E9D8FD',
      600: '#6D2DF0',
      900: '#25005B',
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      500: '#9E9E9E',
      600: '#757575',
      400: '#BDBDBD',
      700: '#616161',
      800: '#424242',
      900: '#111111',
    },
  },
});
