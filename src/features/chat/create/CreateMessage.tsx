import { Icon, Flex, IconButton, Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';

import { STextarea } from '~/shared/ui/STextarea';

interface CreateMessageProps {
  onSubmit?: (message: string) => void;
}

export function CreateMessage({ onSubmit }: CreateMessageProps) {
  const [value, setValue] = useState('');
  const messageRef = useRef<HTMLDivElement>(null);

  return (
    <Flex px={[0, 0, 6]} py={4} alignItems="center" gap={4} w="full">
      <STextarea
        maxLength={50}
        information={value}
        setInformation={setValue}
        placeholder="Введите сообщение..."
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
