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
    h1: {
      fontSize: '2xl',
      fontWeight: '700',
    },
    h2: {
      fontSize: '2xl',
      fontWeight: '600',
    },
    h3: {
      fontFamily: `'Inter', sans-serif`,
    },
    h4: {
      fontFamily: `'Inter', sans-serif`,
      fontSize: 'md',
      fontWeight: '600',
    },
  },
});

const Container = defineStyleConfig({
  variants: {
    mobile: {
      maxW: 'container.xs',
      padding: '0.5rem 1.25rem',
    },
  },
});

const Text = defineStyleConfig({
  variants: {
    cardTextMobile: {
      fontSize: 'xs',
      fontWeight: '500',
    },
  },
});

const Card = defineMultiStyleConfig({
  variants: {
    mobile: definePartsStyle({
      container: {
        borderRadius: '1rem',
        cursor: 'pointer',
        _active: {
          boxShadow: '0 0.4375rem 1.8125rem 0 rgba(100, 100, 111, 0.20)',
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
  components: { Button, Heading, Card, Text, Container },
  styles: {
    global: {
      body: {
        fontSize: 'xs',
        background: 'gray.100',
        color: 'gray.900',
        lineHeight: '120%',
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
