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

const profileAvatar = definePartsStyle({
  label: {
    fontSize: ['md', 'md', '4xl'],
    fontWeight: 'semibold',
  },
  container: {
    w: ['20', '20', '11.25rem'],
    h: ['20', '20', '11.25rem'],
  },
});

export const avatarTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { profileAvatar },
});
