import { Flex, Heading, Container, Box } from '@chakra-ui/react';

import { NotificationList } from '~/widgets/notification-list';

import { DummyNotifications } from '~/entities/dummy';

import { notifications } from '~/shared/lib/notifications';
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
      <Box py={2}>
        <DummyNotifications />
      </Box>
      {/* <NotificationList notifications={notifications} /> */}
    </Container>
  );
}
