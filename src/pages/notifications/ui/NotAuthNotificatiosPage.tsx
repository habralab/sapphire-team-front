import { Flex, Heading, Container, Box } from '@chakra-ui/react';

import { Login } from '~/features/user';

import { DummyNotifications } from '~/entities/dummy';

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
        <DummyNotifications />
      </Box>
      <Login />
    </Container>
  );
}
