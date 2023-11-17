import { Heading, Flex, Box } from '@chakra-ui/react';
import { useState } from 'react';

import { NotificationList } from '~/widgets/notification-list';

import { FilterNotifications } from '~/features/user';

import { notifications, NotificationsDto } from '~/shared/lib/notifications';

export function NotificationsPageDesktop() {
  const [filterNotifications, setFilterNotifications] =
    useState<NotificationsDto[]>(notifications);

  return (
    <Box>
      <Heading as="h1" variant="h1">
        Уведомления
      </Heading>
      <Flex gap={6} my={6} alignItems="start" w="full">
        <NotificationList notifications={filterNotifications} />
        <FilterNotifications setFilter={setFilterNotifications} />
      </Flex>
    </Box>
  );
}
