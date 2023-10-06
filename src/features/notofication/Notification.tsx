import { Flex, Icon } from '@chakra-ui/react';
import { IoNotifications } from 'react-icons/io5';

import { Counter } from '~/shared/ui/Counter';

export function Notification() {
  return (
    <Flex position="relative">
      <Icon as={IoNotifications} w="24px" h="24px" />
      <Counter count={2} />
    </Flex>
  );
}
