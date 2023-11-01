import { Container, Flex, Heading } from '@chakra-ui/react';

import { NotificationCard } from '~/widgets/notification-card';

import { FilterNotifications } from '~/features/user';

export function NotificationPageDesktop() {
  return (
    <Container>
      <Heading as="h1" variant="h1" mb={6}>
        Уведомления
      </Heading>
      <Flex alignItems="start" gap={4}>
        <NotificationCard />
        <FilterNotifications />
      </Flex>
    </Container>
  );
}
