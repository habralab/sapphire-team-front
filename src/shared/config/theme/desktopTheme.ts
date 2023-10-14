import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

import { basicTheme } from './theme';

const Heading = defineStyleConfig({
  variants: {
    h1: {
      fontSize: '4xl',
    },
    h2: {
      fontSize: 'xl',
      marginBottom: '4',
    },
  },
});

const Text = defineStyleConfig({
  variants: {
    caption: {
      fontSize: 'sm',
    },
  },
});

export const desktopTheme = extendTheme(basicTheme, {
  components: { Heading, Text },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
});
