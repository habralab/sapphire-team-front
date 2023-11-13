import { Flex, Heading, Container, Box } from '@chakra-ui/react';

import { NotificationList } from '~/widgets/notification-list';

import { notifications } from '~/shared/lib/notifications';
import { DummyPage } from '~/shared/ui/DummyPage';
import { GoBack } from '~/shared/ui/GoBack';

import notificationSVG from './notification.svg';

export function NotificationsPage() {
  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" my={4} gap={4} h={42}>
        <GoBack />
        <Heading variant="h1" as="h1">
          Уведомления
        </Heading>
      </Flex>
      <Box py={2}>
        <DummyPage heading="Нет уведомлений" image={notificationSVG}>
          Здесь будут отображаться диалоги c Вашими тиммейтами
        </DummyPage>
      </Box>
      {/* <NotificationList notifications={notifications} /> */}
    </Container>
  );
}
