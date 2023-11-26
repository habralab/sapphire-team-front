import { Flex, Heading, Container } from '@chakra-ui/react';

import { NotificationList } from '~/widgets/notification-list';

import { GoBack } from '~/shared/ui/GoBack';

export function NotificationsBase() {
  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" my={4} gap={4} h={42}>
        <GoBack />
        <Heading variant="h1" as="h1">
          Уведомления
        </Heading>
      </Flex>
      <NotificationList />
    </Container>
  );
}
