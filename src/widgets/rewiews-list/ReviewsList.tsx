import { Stack } from '@chakra-ui/react';

import { Rating } from '~/features/user';

import { Reviews } from '~/entities/user';

export function ReviewsList() {
  return (
    <Stack gap={4}>
      <Reviews rating={<Rating />} />
      <Reviews rating={<Rating />} />
      <Reviews rating={<Rating />} />
    </Stack>
  );
}
