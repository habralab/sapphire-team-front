import { Icon, Center } from '@chakra-ui/react';
import { IoNotifications } from 'react-icons/io5';

export function Notification() {
  return (
    <>
      <Icon as={IoNotifications} w="24px" h="24px" />
      <Center
        bg="purple.600"
        color="white"
        position="absolute"
        w="16px"
        h="16px"
        fontSize="xs"
        fontWeight="medium"
        border="1px"
        borderColor="inherit"
        borderRadius="full"
        left="12px"
        top="-4px"
      >
        2
      </Center>
    </>
  );
}
