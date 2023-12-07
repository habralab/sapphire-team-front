import { extendTheme } from '@chakra-ui/react';

import { basicTheme } from './theme';

export const mobileTheme = extendTheme(basicTheme, {
  styles: {
    global: {
      html: {
        minHeight: 'calc(100vh - 56px)',
        '@supports (--css: variables)': {
          minHeight: 'calc(var(--vh, 1vh) * 100)',
        },
      },
    },
  },
});
