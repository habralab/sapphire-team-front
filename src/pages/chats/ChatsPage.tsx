import { Heading, Flex, Container } from '@chakra-ui/react';
import { useState } from 'react';

import { ChatsList } from '~/widgets/chats-list';

import { SearchInput } from '~/features/chat';

export function ChatsPage() {
  const [value, setValue] = useState('');

  return (
    <>
      <Container maxW="md">
        <Flex justifyContent="space-between" alignItems="center" my={4} h={42}>
          <Heading variant="h1" as="h1">
            Чаты
          </Heading>
        </Flex>
        <SearchInput value={value} setValue={setValue} />
      </Container>
      <ChatsList value={value} />
    </>
  );
}
