import { VStack, Box } from '@chakra-ui/react';
import { useRef, useLayoutEffect } from 'react';

import { Message } from '~/entities/chat';

import { STag } from '~/shared/ui/STag';

interface MessagesProps {
  isDesktop?: boolean;
}

export function Messages({ isDesktop }: MessagesProps) {
  const messagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isDesktop)
      messagesRef.current?.scrollTo({
        top: messagesRef.current.scrollHeight,
      });
  }, [isDesktop]);

  return (
    <VStack
      pt={4}
      ref={messagesRef}
      px={[0, 0, 6]}
      overflowY={isDesktop ? 'auto' : 'initial'}
    >
      <Box>
        <STag tags={['Не прочитано']} />
      </Box>
      <VStack gap={6} mb={[4]}>
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
        <VStack alignItems="start">
          <Message variant="incoming">
            Мы ищем людей, которые готовы работать в команде, проявлять инициативу и
            развиваться вместе с нами. Если вы уверены в своих силах и готовы принять
            вызов, то мы будем рады видеть вас в нашей команде. Присылайте ваше резюме на
            адрес электронной почты и мы обязательно рассмотрим вашу кандидатуру.
          </Message>
          <Message variant="incoming">
            Мы ищем людей, которые готовы работать в команде, проявлять инициативу и
            развиваться вместе с нами. Если вы уверены в своих силах и готовы принять
            вызов, то мы будем рады видеть вас в нашей команде. Присылайте ваше резюме на
            адрес электронной почты и мы обязательно рассмотрим вашу кандидатуру.
          </Message>
          <Message variant="incoming">
            Мы ищем людей, которые готовы работать в команде, проявлять инициативу и
            развиваться вместе с нами. Если вы уверены в своих силах и готовы принять
            вызов, то мы будем рады видеть вас в нашей команде. Присылайте ваше резюме на
            адрес электронной почты и мы обязательно рассмотрим вашу кандидатуру.
          </Message>
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
