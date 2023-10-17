import { Icon, Flex, IconButton, Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';

import { useScrollOffset } from '~/shared/hooks';

interface CreateMessageDesktopProps {
  onSubmit?: (message: string) => void;
}

export function CreateMessageDesktop({ onSubmit }: CreateMessageDesktopProps) {
  const [value, setValue] = useState('');
  const messageRef = useRef<HTMLDivElement>(null);
  const scroll = useScrollOffset();

  return (
    <Flex
      position="fixed"
      borderBottom="var(--chakra-space-6) solid var(--chakra-colors-gray-100)"
      bottom="0"
      bg="gray.100"
      zIndex="1"
      width="4xl"
      style={{ transform: `translateX(-${scroll.x}px)` }}
    >
      <Flex
        bg="white"
        borderBottomRadius="lg"
        px="6"
        py="4"
        gap="4"
        borderTop="1px"
        w="full"
        borderColor="gray.300"
        alignItems="center"
      >
        <Box
          ref={messageRef}
          contentEditable
          overflowWrap="anywhere"
          overflowY="auto"
          placeholder="Введите сообщение..."
          width="full"
          border="1px"
          maxH="200px"
          borderRadius="xl"
          borderColor="gray.300"
          onInput={(e) => {
            const element = e.currentTarget;
            const text = element.innerText;
            e.currentTarget.innerHTML = text;
            setValue(text);

            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(element);
            range.collapse(false);
            selection?.removeAllRanges();
            selection?.addRange(range);
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
    </Flex>
  );
}
