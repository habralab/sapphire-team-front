import { Icon, Flex, IconButton, Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';

interface CreateMessageProps {
  fixed?: boolean;
  onSubmit?: (message: string) => void;
}

export function CreateMessage({ fixed, onSubmit }: CreateMessageProps) {
  const [value, setValue] = useState('');
  const messageRef = useRef<HTMLDivElement>(null);

  return (
    <Flex
      bg="white"
      position={fixed ? 'fixed' : 'sticky'}
      borderBottomRadius={fixed ? '' : 'lg'}
      bottom="0"
      left="0"
      right="0"
      justifyContent="center"
      borderTop="1px"
      borderColor="gray.300"
      px={[5, 6]}
      py={4}
      alignItems="center"
      gap={4}
    >
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
