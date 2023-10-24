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
    bg: 'gray.300',
    borderBottomRadius: '2xl',
  },
  button: {
    borderRadius: '2xl',
    _expanded: { bg: 'gray.300', borderBottomRadius: 'none' },
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
