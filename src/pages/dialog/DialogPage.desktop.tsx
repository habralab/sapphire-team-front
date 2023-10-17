import { Box, Divider } from '@chakra-ui/react';

import { Messages } from '~/widgets/messages';

import { CreateMessageDesktop } from '~/features/chat';

import { ChatInfo } from '~/entities/chat';

import { useScrollOffset } from '~/shared/hooks';

export const DialogPageDesktop = () => {
  const scroll = useScrollOffset();
  return (
    <Box position="relative">
      <Box
        pos="fixed"
        top={0}
        w="4xl"
        bg="gray.100"
        borderTop="var(--chakra-space-6) solid var(--chakra-colors-gray-100)"
        style={{ transform: `translateX(-${scroll.x}px)` }}
      >
        <Box bg="white" borderTopRadius="lg" pt={4}>
          <Box px={6}>
            <ChatInfo />
          </Box>
          <Divider variant="light" position="absolute" left={0} right={0} />
        </Box>
      </Box>
      <Box mt="80px" mb="73px">
        <Messages />
      </Box>
      <Box>
        <CreateMessageDesktop />
      </Box>
    </Box>
  );
};
