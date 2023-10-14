import { Divider, Box } from '@chakra-ui/react';

import { Messages } from '~/widgets/messages';

import { CreateMessage } from '~/features/chat';

import { ChatInfo } from '~/entities/chat';

export function DialogPage() {
  return (
    <Box>
      <ChatInfo />
      <Divider variant="light" position="absolute" left={0} right={0} />
      <Messages />
      <CreateMessage />
    </Box>
  );
}
