import { extendTheme } from '@chakra-ui/react';

import { basicTheme } from './theme';

export const whiteMobileTheme = extendTheme(basicTheme, {
  styles: {
    global: {
      body: {
        bg: 'white',
      },
    },
  },
});
