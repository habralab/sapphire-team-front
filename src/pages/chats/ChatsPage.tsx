import { VStack, Heading } from '@chakra-ui/react';
import { useState } from 'react';

import { ChatsList } from '~/widgets/chats-list';

import { SearchInput } from '~/features/chat';

export function ChatsPage() {
  const [value, setValue] = useState('');

  return (
    <VStack gap={4} align="start">
      <Heading variant="h1" as="h1">
        Чаты
      </Heading>
      <SearchInput value={value} setValue={setValue} />
      <ChatsList value={value} />
    </VStack>
  );
}
