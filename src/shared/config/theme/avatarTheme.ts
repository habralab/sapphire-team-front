import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  avatarAnatomy.keys,
);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    bg: 'gray.900',
    color: 'white',
    w: '2.5rem',
    h: '2.5rem',
    fontSize: 'sm',
    fontWeight: '500',
  },
});

export const avatarTheme = defineMultiStyleConfig({ baseStyle });
