import { cardAnatomy } from '@chakra-ui/anatomy';
import {
  extendTheme,
  defineStyleConfig,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys,
);

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

const Card = defineMultiStyleConfig({
  variants: {
    sapphire: definePartsStyle({
      container: {
        borderRadius: '16px',
        cursor: 'pointer',
        _active: {
          boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.20)',
        },
      },
    }),
  },
});

export const basicTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components: { Button, Heading, Card },
  styles: {
    global: {
      body: {
        fontSize: 'sm',
        background: 'gray.100',
        color: 'gray.900',
      },
    },
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Raleway', sans-serif`,
  },
  fontSizes: {
    es: '0.625rem',
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
