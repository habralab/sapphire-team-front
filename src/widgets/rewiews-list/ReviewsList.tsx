import { Flex } from '@chakra-ui/react';

import { Rating } from '~/features/user';

import { Reviews } from '~/entities/user';

export function ReviewsList() {
  return (
    <Flex direction="column">
      <Reviews rating={<Rating />} />
      <Reviews rating={<Rating />} />
      <Reviews rating={<Rating />} />
    </Flex>
  );
}
