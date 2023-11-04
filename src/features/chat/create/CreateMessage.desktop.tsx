import { Icon, Flex, IconButton } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';

import { STextarea } from '~/shared/ui/STextarea';

interface CreateMessageDesktopProps {
  onSubmit?: (message: string) => void;
}

export function CreateMessageDesktop({ onSubmit }: CreateMessageDesktopProps) {
  const [value, setValue] = useState('');
  const messageRef = useRef<HTMLDivElement>(null);

  return (
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
      <STextarea
        maxLength={50}
        value={value}
        setValue={setValue}
        placeholder="Введите сообщение..."
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
