import { tabsAnatomy } from '@chakra-ui/anatomy';
import {
  extendTheme,
  defineStyleConfig,
  defineStyle,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

import { accordionTheme } from './customAnatomy/accordionTheme';
import { avatarTheme } from './customAnatomy/avatarTheme';
import { checkboxTheme } from './customAnatomy/checkboxTheme';
import { switchTheme } from './customAnatomy/switchTheme';
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
    onboard: {
      tablist: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2',
      },
      tab: {
        borderBottom: '4px solid',
        borderColor: 'blackAlpha.200',
        borderRadius: 'full',
        w: '44px',
        py: '0',
        _selected: {
          borderColor: 'gray.400',
        },
        _disabled: {
          borderColor: 'blackAlpha.200',
          opacity: 1,
        },
      },
      tabpanel: {
        p: '0',
      },
    },
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
  p: 0,
  _hover: {
    color: colorScheme === 'purple' ? 'purple.500' : 'gray.800',
  },
  _active: {
    color: colorScheme === 'purple' ? 'purple.400' : 'gray.700',
  },
}));

const lightButton = defineStyle(({ colorScheme }) => ({
  bg: colorScheme === 'gray' ? 'gray.300' : 'gray.100',
  p: 0,
  _hover: {
    bg: colorScheme === 'gray' ? 'gray.400' : 'gray.300',
  },
  _active: {
    bg: colorScheme === 'gray' ? 'gray.400' : 'gray.300',
    color: colorScheme === 'gray' ? 'white' : 'gray.800',
  },
  size: 'md',
}));

const sizes = {
  sm: defineStyle({
    h: '6',
  }),
  md: defineStyle({
    h: '10',
  }),
  xl: defineStyle({
    h: '12',
  }),
};

const Button = defineStyleConfig({
  sizes,
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'semibold',
  },
  variants: {
    flat: flatButton,
    filter: {
      height: 'auto',
      fontWeight: 'normal',
      fontSize: 'sm',
      padding: 0,
      _hover: {
        color: 'gray.900',
      },
    },
    light: lightButton,
  },

  defaultProps: {
    colorScheme: 'dark',
    size: 'xl',
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
      lineHeight: 'inherit',
    },
    h2: {
      fontSize: 'lg',
      fontWeight: 'semibold',
      marginBottom: '3',
      lineHeight: 'inherit',
    },
    h3: {
      fontSize: 'md',
      fontWeight: 'medium',
      lineHeight: 'inherit',
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
    Link,
    Heading,
    Text,
    Accordion: accordionTheme,
    Checkbox: checkboxTheme,
    Switch: switchTheme,
  },
  styles: {
    global: {
      'html, #root': {
        height: '100%',
      },
      body: {
        fontSize: 'sm',
        lineHeight: '1.2rem',
        color: 'gray.900',
        bg: 'bg',
        overflowY: 'scroll',
        height: '100%',
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
});
