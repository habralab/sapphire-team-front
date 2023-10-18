import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  accordionAnatomy.keys,
);

const baseStyle = definePartsStyle({
  container: {
    borderTopWidth: '0px',
    _last: {
      borderBottomWidth: '0px',
    },
  },
  button: {
    borderRadius: '2xl',
    _expanded: { bg: 'gray.100', borderBottomRadius: 'none' },
  },
  panel: {
    bg: 'gray.100',
    borderBottomRadius: '2xl',
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
