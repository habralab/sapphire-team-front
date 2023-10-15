import { extendTheme } from '@chakra-ui/react';

import { mobileTheme } from './mobileTheme';

export const whiteMobileTheme = extendTheme(mobileTheme, {
  styles: {
    global: {
      body: {
        bg: 'white',
      },
    },
  },
});
