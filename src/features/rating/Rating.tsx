import { Flex, Icon } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

import { SText } from '~/shared/ui/SText';

export function Rating() {
  return (
    <Flex align="center" gap={1}>
      <Icon as={AiFillStar} color="yellow.400" w={4} h={4} />
      <SText variant="medium">5</SText>
    </Flex>
  );
}
