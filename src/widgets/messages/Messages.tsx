import { VStack, Box } from '@chakra-ui/react';

import { Message } from '~/entities/chat';

import { STag } from '~/shared/ui/STag';

export function Messages() {
  return (
    <VStack mt={4} mb={6}>
      <Box>
        <STag tags={['Сегодня']} />
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
        <VStack alignItems="start">
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
