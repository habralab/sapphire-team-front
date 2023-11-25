import { Flex, Heading, Container, Box } from '@chakra-ui/react';

import { Login } from '~/features/user';

import { DummyPage } from '~/shared/ui/DummyPage';
import { GoBack } from '~/shared/ui/GoBack';

export function NotAuthNotificationsPage() {
  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" my={4} gap={4} h={42}>
        <GoBack />
        <Heading variant="h1" as="h1">
          Уведомления
        </Heading>
      </Flex>
      <Box py={2}>
        <DummyPage heading="Нет уведомлений" variant="notification">
          Здесь будут отображаться диалоги c Вашими тиммейтами
        </DummyPage>
      </Box>
      <Login />
    </Container>
  );
}
