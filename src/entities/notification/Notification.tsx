import { Flex, Heading, VStack, Button, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { useIsMobile } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { NotificationImage } from '~/shared/ui/NotificationImage';

import { useGetNotification } from './api';
import { NOTIFICATIONS_MESSAGE, NOTIFICATIONS } from './Notification.constants';

interface NotificationProps {
  notificationId: string;
  read: () => void;
}

export function Notification({ notificationId, read }: NotificationProps) {
  const isMobile = useIsMobile();
  const { data: notification } = useGetNotification(notificationId);

  useEffect(() => {
    if (!notification || notification.is_read) return;
    read();
  }, [notification]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="white"
      px={isMobile ? 5 : 6}
      py={isMobile ? 5 : 20}
      borderRadius="2xl"
      gap={5}
      grow={1}
    >
      <VStack spacing={0} gap={3} textAlign="center">
        <NotificationImage />
        <Heading variant="h2" mb={0}>
          {notification && NOTIFICATIONS[notification.type as keyof typeof NOTIFICATIONS]}
        </Heading>
        <Text variant="caption">
          {notification &&
            NOTIFICATIONS_MESSAGE[
              notification.type as keyof typeof NOTIFICATIONS_MESSAGE
            ]}
        </Text>
      </VStack>
      <Button w="full" maxW={isMobile ? 72 : 80}>
        <Link
          to={
            notification
              ? generatePath(PATHS.position, { id: notification.data.position_id })
              : '#'
          }
        >
          Перейти к проекту
        </Link>
      </Button>
    </Flex>
  );
}
