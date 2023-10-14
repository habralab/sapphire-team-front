import { Divider, Flex, Icon, Box, Input } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';

import { Messages } from '~/widgets/messages';

import { ChatInfo } from '~/entities/chat';

export function DialogPage() {
  return (
    <Box>
      <ChatInfo />
      <Divider variant="dividerLight" position="absolute" left={0} right={0} />
      <Messages />
      <Flex
        bg="white"
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        justifyContent="center"
        zIndex={1}
        borderTop="1px"
        borderColor="gray.300"
        px={5}
        py={4}
        alignItems="center"
        gap={4}
      >
        <Input placeholder="Сообщение" borderRadius="2xl" bg="gray.100" />
        <Icon as={IoSend} w={4} h={4} />
      </Flex>
    </Box>
  );
}
