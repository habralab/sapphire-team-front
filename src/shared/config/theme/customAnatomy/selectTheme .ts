import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  selectAnatomy.keys,
);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    background: 'blue.100',
  },
  icon: {
    color: 'blue.400',
  },
});

export const selectTheme = defineMultiStyleConfig({ baseStyle });
