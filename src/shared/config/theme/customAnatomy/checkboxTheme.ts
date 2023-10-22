import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
);

const black = definePartsStyle({
  control: defineStyle({
    borderColor: 'gray.800',
  }),
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { black },
});
