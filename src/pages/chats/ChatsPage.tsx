import { Heading, Flex, Container, Box } from '@chakra-ui/react';
import { useState } from 'react';

import { ChatsList } from '~/widgets/chats-list';

import { SearchInput } from '~/shared/ui/SearchInput';

export function ChatsPage() {
  const [value, setValue] = useState('');

  return (
    <Box w="full" px={5}>
      <Container maxW="md" mb={4} px={0}>
        <Flex justifyContent="space-between" alignItems="center" my={4} h={42}>
          <Heading variant="h1" as="h1">
            Чаты
          </Heading>
        </Flex>
        <SearchInput placeholder="Найти в чатах" onChange={console.log} />
      </Container>
      <ChatsList value={value} />
    </Box>
  );
}
