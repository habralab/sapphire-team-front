import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

import { basicTheme } from '~/shared/config/theme';
import '@fontsource/raleway/700.css';

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'bold',
  },
  variants: {
    dark: {
      bg: 'white',
      color: 'purple.700',
      _hover: {
        bg: 'purple.100',
      },
      _active: {
        bg: 'purple.900',
        color: 'white',
      },
    },
  },
  defaultProps: {
    variant: 'dark',
  },
});

export const theme = extendTheme(basicTheme, {
  components: { Button },
  styles: {
    global: {
      body: {
        bg: 'purple.700',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
  },
});
