import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  switchAnatomy.keys,
);

const baseStyle = definePartsStyle({
  track: {
    bg: 'gray.300',
    _checked: {
      bg: 'purple.600',
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
