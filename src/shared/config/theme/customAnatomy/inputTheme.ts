import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const md = defineStyle({
  fontSize: 'sm',
});

const sizes = {
  md: definePartsStyle({ field: md }),
};

export const inputTheme = defineMultiStyleConfig({ sizes });
