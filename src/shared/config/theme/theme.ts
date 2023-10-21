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

import { accordionTheme } from './customAnatomy/accordionTheme';
import { avatarTheme } from './customAnatomy/avatarTheme';
import { checkboxTheme } from './customAnatomy/checkboxTheme';
import { inputTheme } from './customAnatomy/inputTheme';
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
        mb: 4,
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
        p: 0,
      },
    }),
  },
});

const Link = defineStyleConfig({
  variants: {
    nav: {
      color: 'gray.500',
      _hover: { textDecoration: 'none' },
      _activeLink: { color: 'gray.900' },
    },
  },
});

const flatButton = defineStyle(({ colorScheme }) => ({
  color: colorScheme === 'purple' ? 'purple.600' : 'gray.900',
  _hover: {
    color: colorScheme === 'purple' ? 'purple.500' : 'gray.800',
  },
  _active: {
    color: colorScheme === 'purple' ? 'purple.400' : 'gray.700',
  },
}));

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'bold',
  },
  variants: {
    flat: flatButton,
  },

  defaultProps: {
    colorScheme: 'dark',
  },
});

const Icon = defineStyleConfig({
  baseStyle: {
    w: '6',
    h: '6',
  },
});

const light = defineStyle({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.300',
});

const dark = defineStyle({
  borderWidth: '1px',
  borderRadius: '4px',
  borderStyle: 'solid',
  borderColor: 'gray.400',
});

const Divider = defineStyleConfig({
  variants: { light, dark },
});

const Heading = defineStyleConfig({
  variants: {
    h1: {
      fontFamily: `'Raleway', sans-serif`,
      fontSize: '2xl',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 'lg',
      fontWeight: 'medium',
      marginBottom: '3',
    },
    h3: {
      fontSize: 'sm',
      fontWeight: 'medium',
    },
  },
});

const Text = defineStyleConfig({
  variants: {
    caption: {
      fontSize: 'xs',
      color: 'gray.700',
    },
  },
});

export const basicTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components: {
    Button,
    Divider,
    Tabs,
    Avatar: avatarTheme,
    //Icon,
    Link,
    Heading,
    Text,
    Accordion: accordionTheme,
    Checkbox: checkboxTheme,
    Input: inputTheme,
  },
  styles: {
    global: {
      body: {
        transition: 'background 1s ease-in-out',
        fontSize: 'sm',
        lineHeight: '120%',
        color: 'gray.900',
        bg: 'bg',
        overflowY: 'scroll',
      },
    },
  },
  fonts: {
    body: `'Inter', sans-serif`,
  },
  semanticTokens: {
    colors: {
      bg: 'gray',
      dark: {
        500: 'gray.900',
        600: 'gray.800',
        700: 'gray.700',
      },
      gray: 'gray.100',
    },
  },
  colors: {
    purple: {
      100: '#E9D8FD',
      600: '#6D2DF0',
      900: '#25005B',
    },
    pin: {
      100: '#E0E0E0',
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#111111',
    },
  },
  breakpoints: {
    md: '56.25rem',
  },
});
