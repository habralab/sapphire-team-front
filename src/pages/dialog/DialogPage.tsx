import { Divider, Box, Portal } from '@chakra-ui/react';

import { Messages } from '~/widgets/messages';

import { CreateMessage } from '~/features/chat';

import { ChatInfo } from '~/entities/chat';

import { useLayoutRefs } from '~/shared/hooks';

export function DialogPage() {
  const layout = useLayoutRefs();

  return (
    <Box>
      {layout?.header && (
        <Portal containerRef={layout.header}>
          <ChatInfo />
          <Divider variant="light" position="absolute" left={0} right={0} />
        </Portal>
      )}
      <Messages />
      <CreateMessage />
    </Box>
  );
}
