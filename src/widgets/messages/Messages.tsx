import { VStack, Box } from '@chakra-ui/react';
import { useRef, useLayoutEffect } from 'react';

import { Message } from '~/entities/chat';

import { STag } from '~/shared/ui/STag';

export function Messages() {
  const messagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(
      () =>
        messagesRef.current?.scrollTo({
          top: messagesRef.current.scrollHeight,
          behavior: 'smooth',
        }),
      0,
    );
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <VStack
      mt={4}
      ref={messagesRef}
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          width: '0',
        },
      }}
    >
      <Box>
        <STag tags={['Не прочитано']} />
      </Box>
      <VStack gap={6}>
        <VStack alignItems="end">
          <Message variant="outgoing">Здравствуйте</Message>
          <Message variant="outgoing">
            Мы рады пригласить вас в нашу дружную команду.
          </Message>
          <Message variant="outgoing">
            Мы ищем людей, которые готовы работать в команде, проявлять инициативу и
            развиваться вместе с нами. Если вы уверены в своих силах и готовы принять
            вызов, то мы будем рады видеть вас в нашей команде. Присылайте ваше резюме на
            адрес электронной почты и мы обязательно рассмотрим вашу кандидатуру.
          </Message>
        </VStack>
        <VStack alignItems="start" mb={[0, 4]}>
          <Message variant="incoming">
            Мы ищем людей, которые готовы работать в команде, проявлять инициативу и
            развиваться вместе с нами. Если вы уверены в своих силах и готовы принять
            вызов, то мы будем рады видеть вас в нашей команде. Присылайте ваше резюме на
            адрес электронной почты и мы обязательно рассмотрим вашу кандидатуру.
          </Message>
        </VStack>
      </VStack>
    </VStack>
  );
}
