/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Flex, Heading, VStack, Button, Text, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { useAuth, useIsMobile } from '~/shared/hooks';
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
  const { userId } = useAuth();

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
        <Text>
          {notification &&
            NOTIFICATIONS_MESSAGE[
              notification.type as keyof typeof NOTIFICATIONS_MESSAGE
            ]}
        </Text>

        {notification &&
          notification.data.owner_email &&
          notification.data.participant_email && (
            <Stack bg="gray.100" spacing={0} w="full" gap={3} p={4} borderRadius="2xl">
              <Text>Свяжитесь с пользователем</Text>
              <Text>
                {userId === notification.data.owner_id
                  ? notification.data.participant_email
                  : notification.data.owner_email}
              </Text>
            </Stack>
          )}
      </VStack>
      <Button w="full" maxW={isMobile ? 72 : 80}>
        <Link
          to={
            !notification
              ? '#'
              : userId === notification.data.owner_id
              ? generatePath(PATHS.project, { id: notification.data.project_id })
              : generatePath(PATHS.position, { id: notification.data.position_id })
          }
        >
          Перейти к проекту
        </Link>
      </Button>
    </Flex>
  );
}
