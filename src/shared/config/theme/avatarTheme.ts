import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  avatarAnatomy.keys,
);

const baseStyle = definePartsStyle({
  container: {
    bg: 'gray.900',
    color: 'white',
    w: '10',
    h: '10',
  },
  label: {
    fontSize: 'sm',
    fontWeight: '600',
  },
  excessLabel: {
    bg: 'gray.100',
  },
});

export const avatarTheme = defineMultiStyleConfig({ baseStyle });
