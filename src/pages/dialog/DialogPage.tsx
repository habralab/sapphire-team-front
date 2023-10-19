import { Divider, Box, Container } from '@chakra-ui/react';

import { Messages } from '~/widgets/messages';

import { CreateMessage } from '~/features/chat';

import { ChatInfo } from '~/entities/chat';

export function DialogPage() {
  return (
    <>
      <Box pos="sticky" top={0} bg="white">
        <Container maxW="md">
          <ChatInfo />
          <Divider variant="light" position="absolute" left={0} right={0} />
        </Container>
      </Box>

      <Container maxW="md">
        <Messages />
      </Container>

      <Box
        pos="sticky"
        bottom={0}
        bg="white"
        justifyContent="center"
        borderTop="1px"
        borderColor="gray.300"
      >
        <Container maxW="md">
          <CreateMessage />
        </Container>
      </Box>
    </>
  );
}
