import { Icon, Flex, IconButton } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { STextarea } from '~/shared/ui/STextarea';

interface CreateMessageProps {
  onSubmit?: (message: string) => void;
}

export function CreateMessage({ onSubmit }: CreateMessageProps) {
  const [value, setValue] = useState('');
  const isMobile = useIsMobile();
  const messageRef = useRef<HTMLDivElement>(null);

  return (
    <Flex px={isMobile ? 0 : 6} py={4} alignItems="center" gap={4} w="full">
      <STextarea
        maxLength={50}
        value={value}
        setValue={setValue}
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
