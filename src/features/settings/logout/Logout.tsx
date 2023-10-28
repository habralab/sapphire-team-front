import { Button, Icon } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';

export function Logout() {
  return (
    <Button
      variant="flat"
      bg="gray.300"
      position="fixed"
      bottom="94px"
      left="5"
      right="5"
      py={6}
      fontSize="sm"
    >
      Выйти
      <Icon ml={2} w={6} h={6} as={IoLogOutOutline} />
    </Button>
  );
}
