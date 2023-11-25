import { Image, Text } from '@chakra-ui/react';

import chats from './chats.svg';

export function DummyChats() {
  return (
    <>
      <Image src={chats} />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Нет сообщений
      </Text>
      <Text color="gray.700" textAlign="center">
        Здесь будут отображаться диалоги с Вашими тиммейтами
      </Text>
    </>
  );
}
