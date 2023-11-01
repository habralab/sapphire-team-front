import { Container, Heading, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { NotificationList } from '~/widgets/notification-list';

import { FilterNotifications } from '~/features/user';

import { notifications, NotificationsDto } from '~/shared/lib/notifications';

export function NotificationsPageDesktop() {
  const [filterNotifications, setFilterNotifications] =
    useState<NotificationsDto[]>(notifications);

  return (
    <Container>
      <Heading as="h1">Уведомления</Heading>
      <Flex gap={6} my={6} alignItems="stretch" w="full">
        <NotificationList notifications={filterNotifications} />
        <FilterNotifications
          filter={filterNotifications}
          setFilter={setFilterNotifications}
        />
      </Flex>
    </Container>
  );
}
