/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Flex, Heading, VStack, Button, Text, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { GetNotificationResponse } from '~/shared/api';
import { useAuth, useIsMobile } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { NotificationImage } from '~/shared/ui/NotificationImage';

import { useGetNotification } from './api';
import { NOTIFICATIONS_MESSAGE, NOTIFICATIONS } from './Notification.constants';

function getNavigateUrl(notification?: GetNotificationResponse, userId?: string) {
  if (!notification) return '#';

  if (userId === notification.data.owner_id) {
    return generatePath(PATHS.project, { id: notification.data.project_id });
  } else {
    return generatePath(PATHS.position, { id: notification.data.position_id });
  }
}

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

  const navigateUrl = getNavigateUrl(notification, userId);

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
        {notification && (
          <React.Fragment>
            <Heading variant="h2" mb={0}>
              {NOTIFICATIONS[notification.type as keyof typeof NOTIFICATIONS]}
            </Heading>
            <Text>
              {
                NOTIFICATIONS_MESSAGE[
                  notification.type as keyof typeof NOTIFICATIONS_MESSAGE
                ]
              }
            </Text>

            {notification.data.owner_email && notification.data.participant_email && (
              <Stack bg="gray.100" spacing={0} w="full" gap={3} p={4} borderRadius="2xl">
                <Text>Свяжитесь с пользователем</Text>
                <Text>
                  {userId === notification.data.owner_id
                    ? notification.data.participant_email
                    : notification.data.owner_email}
                </Text>
              </Stack>
            )}
          </React.Fragment>
        )}
      </VStack>
      <Button w="full" maxW={isMobile ? 72 : 80}>
        <Link to={navigateUrl}>Перейти к проекту</Link>
      </Button>
    </Flex>
  );
}
