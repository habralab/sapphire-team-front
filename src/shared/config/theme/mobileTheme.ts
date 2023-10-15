import { extendTheme } from '@chakra-ui/react';

import { basicTheme } from './theme';

export const mobileTheme = extendTheme(basicTheme, {
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        overflow: 'hidden',
      },
    },
  },
});
