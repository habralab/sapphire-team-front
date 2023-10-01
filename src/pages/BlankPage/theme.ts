import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

// import { basicTheme } from '~/shared/config/theme';
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

export const theme = extendTheme({
  components: { Button },
  colors: {
    purple: {
      700: '#4A00B5',
      900: '#25005B',
      100: '#E6DAF7',
    },
  },
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
