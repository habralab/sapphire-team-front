import { Input, Icon, Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';

interface CreateMessageProps {
  position?: string;
}

export function CreateMessage({ position }: CreateMessageProps) {
  const [value, setValue] = useState('');

  return (
    <Flex
      bg="white"
      justifyContent="center"
      borderTop="1px"
      borderColor="gray.300"
      px={[5, 6]}
      py={4}
      alignItems="center"
      gap={4}
    >
      <Input
        placeholder="Сообщение"
        borderRadius="2xl"
        bg="gray.100"
        h="36px"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <IconButton
        aria-label="create-message"
        variant="flat"
        w="fit-content"
        onClick={() => {
          setValue('');
        }}
        icon={<Icon as={IoSend} w={4} h={4} />}
      />
    </Flex>
  );
}
