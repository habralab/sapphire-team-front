import { Divider, Box, Container } from '@chakra-ui/react';
import { useEffect } from 'react';

import { Messages } from '~/widgets/messages';

import { CreateMessage } from '~/features/chat';

import { ChatInfo } from '~/entities/chat';

export function DialogPage() {
  useEffect(() => {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
    window.scrollTo({
      top: scrollHeight,
    });
  }, []);

  return (
    <Box w="full" bg="white">
      <Box pos="sticky" top={0} bg="bg">
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
        bg="bg"
        justifyContent="center"
        borderTop="1px"
        borderColor="gray.300"
      >
        <Container maxW="md">
          <CreateMessage />
        </Container>
      </Box>
    </Box>
  );
}
