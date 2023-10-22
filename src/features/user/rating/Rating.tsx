import { Flex, Icon, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

export function Rating() {
  return (
    <Flex align="center" gap={1}>
      <Icon as={AiFillStar} color="yellow.400" />
      <Text fontWeight="medium" fontSize="xs">
        5
      </Text>
    </Flex>
  );
}
