import { Heading, Stack, Box } from '@chakra-ui/react';
import { useState } from 'react';

import { ChatsList } from '~/widgets/chats-list';

import { SearchInput } from '~/features/chat';

export function ChatsPageDesktop() {
  const [value, setValue] = useState('');

  return (
    <>
      <Heading variant="h1" as="h1" mb={6}>
        Чаты
      </Heading>
      <Stack gap={4} bg="white" borderRadius="2xl" spacing={0}>
        <Box pt={4} px={5}>
          <SearchInput value={value} setValue={setValue} />
        </Box>
        <ChatsList value={value} view="desktop" />
      </Stack>
    </>
  );
}
