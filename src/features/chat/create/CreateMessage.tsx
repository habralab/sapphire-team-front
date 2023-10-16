import { Input, Icon, Flex } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';

export function CreateMessage() {
  return (
    <Flex
      bg="white"
      justifyContent="center"
      borderTop="1px"
      borderColor="gray.300"
      px={5}
      py={4}
      alignItems="center"
      gap={4}
    >
      <Input placeholder="Сообщение" borderRadius="2xl" bg="gray.100" />
      <Icon as={IoSend} w={4} h={4} />
    </Flex>
  );
}
