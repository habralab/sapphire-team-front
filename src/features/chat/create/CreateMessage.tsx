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
        placeholder="Введите сообщение..."
        width="full"
        border="1px"
        borderRadius="lg"
        borderColor="gray.300"
        onInput={(e) => {
          setValue(e.currentTarget.innerText);
        }}
        _focusVisible={{ outline: 'none' }}
        _empty={{
          _before: {
            color: 'gray.500',
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
        icon={<Icon as={IoSend} w={4} h={4} />}
      />
    </Flex>
  );
}
