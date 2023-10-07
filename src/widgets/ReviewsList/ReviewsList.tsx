import { Box } from '@chakra-ui/react';

import { Reviews } from '~/entities/profile';

export function ReviewsList() {
  return (
    <Box position="absolute" left="0" right="0">
      <Reviews />
      <Reviews />
      <Reviews />
    </Box>
  );
}
