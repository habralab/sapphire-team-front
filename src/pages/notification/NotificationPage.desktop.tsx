import { Box, Flex, Heading } from '@chakra-ui/react';

import { FilterNotifications } from '~/features/notifications';

import { Notification } from '~/entities/notification';

export function NotificationPageDesktop() {
  return (
    <Box>
      <Heading as="h1" variant="h1" mb={6}>
        Уведомления
      </Heading>
      <Flex alignItems="start" gap={4}>
        <Notification />
        <FilterNotifications />
      </Flex>
    </Box>
  );
}
