import { Container, Flex, Heading } from '@chakra-ui/react';

import { useReadNotification } from '~/features/notifications';

import { Notification } from '~/entities/notification';

import { GoBack } from '~/shared/ui/GoBack';

interface NotificationBasePage {
  notificationId: string;
}

export function NotificationBasePage({ notificationId }: NotificationBasePage) {
  const { mutate: readNotification } = useReadNotification(notificationId);

  return (
    <Container maxW="md" mt={2} mb={4}>
      <Flex alignItems="center" gap={2} my={4}>
        <GoBack />
        <Heading as="h1" variant="h1">
          Уведомления
        </Heading>
      </Flex>
      <Notification notificationId={notificationId} read={readNotification} />
    </Container>
  );
}
