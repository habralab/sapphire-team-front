import { tabsAnatomy } from '@chakra-ui/anatomy';
import {
  extendTheme,
  defineStyleConfig,
  defineStyle,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

import '@fontsource/raleway/cyrillic-600.css';
import '@fontsource/raleway/cyrillic-700.css';
import '@fontsource/inter/cyrillic-400.css';
import '@fontsource/inter/cyrillic-500.css';
import '@fontsource/inter/cyrillic-600.css';
import '@fontsource/inter/cyrillic-700.css';

/**
 * Можно посмотреть исходники и понять, что можно переопределить
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src
 */

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  tabsAnatomy.keys,
);

const Tabs = defineMultiStyleConfig({
  variants: {
    base: definePartsStyle({
      tablist: {
        bg: 'white',
        w: '100%',
        borderRadius: 'full',
        p: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      tab: {
        h: '7',
        color: 'gray.600',
        fontSize: 'sm',
        borderRadius: 'full',
        flex: '1',
        _selected: { color: 'white', bg: 'gray.900' },
      },
      tabpanel: {
        position: 'relative',
      },
    }),
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'bold',
  },
});

const dividerStyle = defineStyle({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.300',
});

const dividerStyleTabs = defineStyle({
  borderWidth: '1px',
  borderRadius: '4px',
  borderStyle: 'solid',
  borderColor: 'gray.400',
});

const Divider = defineStyleConfig({
  variants: { dividerStyle, dividerStyleTabs },
});

export const basicTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components: { Button, Divider, Tabs },
  styles: {
    global: {
      body: {
        fontSize: 'sm',
        color: 'gray.900',
        bg: 'gray.100',
      },
    },
  },
  fonts: {
    body: `'Inter', sans-serif`,
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
  breakpoints: {
    md: '37.5rem',
  },
});
