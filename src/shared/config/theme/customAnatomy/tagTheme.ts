import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  tagAnatomy.keys,
);

const baseStyle = definePartsStyle({
  closeButton: {
    w: '1px',
    h: '1px',
    boxSizing: '1',
  },
});

export const tagTheme = defineMultiStyleConfig({ baseStyle });
