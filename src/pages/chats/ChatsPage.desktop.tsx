import { Heading, Stack, Box, Divider, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { ChatsList } from '~/widgets/chats-list';
import { Messages } from '~/widgets/messages';

import { CreateMessageDesktop, SearchInput } from '~/features/chat';

import { ChatInfo } from '~/entities/chat';

export function ChatsPageDesktop() {
  const [value, setValue] = useState('');

  return (
    <Box>
      <Heading variant="h1" as="h1" mb={6}>
        Чаты
      </Heading>
      <Flex bg="white" borderRadius="2xl" height="calc(100vh - 6.7rem)">
        <Stack
          bg="white"
          borderLeftRadius="2xl"
          borderRight="1px"
          borderColor="gray.300"
          spacing={0}
          position="relative"
          width="400px"
          flexShrink="0"
        >
          <Box pt={4} px={5}>
            <SearchInput value={value} setValue={setValue} />
            <Divider variant="light" position="absolute" left={0} right={0} />
          </Box>
          <ChatsList value={value} view="desktop" />
        </Stack>
        <Stack position="relative" spacing={0} minWidth="400px">
          <Box>
            <ChatInfo isDesktop />
            <Divider variant="light" position="absolute" left={0} right={0} />
          </Box>
          <Messages />
          <CreateMessageDesktop />
        </Stack>
      </Flex>
    </Box>
  );
}
