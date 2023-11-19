import { Heading, Flex, Container, Box } from '@chakra-ui/react';
import { useState } from 'react';

import { ChatsList } from '~/widgets/chats-list';

import { SearchInput } from '~/shared/ui/SearchInput';

export function ChatsPageBase() {
  const [value, setValue] = useState('');

  return (
    <Box w="full" bg="white">
      <Box bg="bg">
        <Container maxW="md" py={4} pb={8}>
          <Flex justifyContent="space-between" alignItems="center" h={42} mb={2}>
            <Heading variant="h1" as="h1">
              Чаты
            </Heading>
          </Flex>
          <SearchInput placeholder="Найти в чатах" onChange={console.log} />
        </Container>
      </Box>
      <ChatsList value={value} />
    </Box>
  );
}
