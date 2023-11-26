import { Heading, Flex, Box } from '@chakra-ui/react';

import { NotificationList } from '~/widgets/notification-list';

export function NotificationsPageDesktop() {
  return (
    <Box>
      <Heading as="h1" variant="h1">
        Уведомления
      </Heading>
      <Flex gap={6} my={6} alignItems="start" w="full">
        <NotificationList />
        {/* <FilterNotifications setFilter={setFilterNotifications} /> */}
      </Flex>
    </Box>
  );
}
