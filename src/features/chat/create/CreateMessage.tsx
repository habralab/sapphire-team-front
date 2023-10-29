import { Icon, Flex, IconButton, Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';

interface CreateMessageProps {
  onSubmit?: (message: string) => void;
}

export function CreateMessage({ onSubmit }: CreateMessageProps) {
  const [value, setValue] = useState('');
  const messageRef = useRef<HTMLDivElement>(null);

  return (
    <Flex px={[0, 0, 6]} py={4} alignItems="center" gap={4} w="full">
      <Box
        ref={messageRef}
        contentEditable
        maxW="90%"
        width="full"
        border="1px"
        borderRadius="lg"
        borderColor="gray.300"
        bg="white"
        _hover={{
          borderColor: 'blue.500',
        }}
        onInput={(e) => {
          setValue(e.currentTarget.innerText);
        }}
        _empty={{
          _before: {
            color: 'gray.400',
            content: '"Введите сообщение..."',
          },
        }}
        p="2"
      />
      <IconButton
        aria-label="create-message"
        variant="flat"
        minW="auto"
        onClick={() => {
          if (onSubmit) onSubmit(value);
          if (messageRef.current) {
            messageRef.current.innerHTML = '';
          }
        }}
        icon={<Icon as={IoSend} />}
      />
    </Flex>
  );
}
