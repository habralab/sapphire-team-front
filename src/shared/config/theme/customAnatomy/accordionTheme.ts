import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  accordionAnatomy.keys,
);

const baseStyle = definePartsStyle({
  container: {
    border: 'none',
  },
  panel: {
    p: 0,
    pb: 2,
    borderBottomRadius: '2xl',
  },
  button: {
    borderRadius: 'none',
    _hover: { bg: 'gray.200' },
    _expanded: { bg: 'gray.200' },
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
