import { Heading, Container, HStack, Stack, Box, Divider } from '@chakra-ui/react';
import { useState } from 'react';

import { ChatsList } from '~/widgets/chats-list';
import { Messages } from '~/widgets/messages';

import { CreateMessage, SearchInput } from '~/features/chat';

import { ChatInfo } from '~/entities/chat';

export function ChatsPageDesktop() {
  const [value, setValue] = useState('');

  const chatsHeight = () => {
    return window.innerHeight - 150;
  };

  return (
    <Container>
      <Heading variant="h1" as="h1" mb={6}>
        Чаты
      </Heading>
      <HStack
        bg="white"
        borderRadius="2xl"
        alignItems="stretch"
        overflow="hidden"
        spacing={0}
        h={chatsHeight()}
      >
        <Stack
          minW="320px"
          maxW="320px"
          boxSizing="content-box"
          gap={4}
          px={5}
          borderRight="1px"
          borderColor="gray.300"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: '0',
            },
          }}
        >
          <Box pt={4}>
            <SearchInput value={value} setValue={setValue} />
          </Box>
          <ChatsList value={value} view="desktop" />
        </Stack>

        <Stack position="relative" px={6} spacing={0} alignItems="stretch">
          <Box pt={4}>
            <ChatInfo view="desktop" />
            <Divider variant="light" position="absolute" left={0} right={0} />
          </Box>
          <Messages />
          <Box mx={-6}>
            <CreateMessage position="sticky" />
          </Box>
        </Stack>
      </HStack>
    </Container>
  );
}
