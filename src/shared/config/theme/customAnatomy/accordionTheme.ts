import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  accordionAnatomy.keys,
);

const baseStyle = definePartsStyle({
  root: {
    overflow: 'hidden',
  },
  container: {
    border: 'none',
  },
  panel: {
    p: 0,
    pb: 2,
  },
  button: {
    py: 3,
    _hover: {
      bg: 'initial',
    },
    _expanded: { bg: 'gray.200' },
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
