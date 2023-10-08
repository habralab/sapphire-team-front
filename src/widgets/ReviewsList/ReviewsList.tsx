import { Flex } from '@chakra-ui/react';

import { Rating } from '~/features/rating';

import { Reviews } from '~/entities/profile';

export function ReviewsList() {
  return (
    <Flex direction="column" position="absolute" left="0" right="0">
      <Reviews rating={<Rating />} />
      <Reviews rating={<Rating />} />
      <Reviews rating={<Rating />} />
    </Flex>
  );
}
