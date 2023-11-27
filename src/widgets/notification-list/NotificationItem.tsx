import { Stack, Flex, Heading, Text, Circle } from '@chakra-ui/react';
import { generatePath } from 'react-router-dom';

import { NotificationResponse } from '~/shared/api/types';
import { useIsMobile } from '~/shared/hooks';
import { formatDate, formatTime } from '~/shared/lib/adapters';
import { PATHS } from '~/shared/lib/router';
import { SLink } from '~/shared/ui/SLink';

import { NOTIFICATIONS } from './Notifications.constants';

interface NotificationItemProps {
  notification: NotificationResponse;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const isMobile = useIsMobile();

  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="gray.200"
      py={3}
      px={isMobile ? 5 : 6}
      _last={{ border: 'none' }}
      gap={1}
    >
      <Flex alignItems="baseline" justifyContent="space-between" gap={2}>
        <Circle
          size="1.5"
          bg="purple.600"
          visibility={notification.is_read ? 'hidden' : 'visible'}
          position="relative"
          top="-0.15rem"
        />
        <Stack spacing={0} gap={1}>
          <Heading variant="h3">
            {NOTIFICATIONS[notification.type as keyof typeof NOTIFICATIONS]}
          </Heading>
          <SLink to={generatePath(PATHS.position, { id: notification.data.position_id })}>
            {notification.data.project_name}
          </SLink>
        </Stack>
      </Flex>
      <Stack gap={0} alignItems="end" flexShrink={0}>
        <Text variant="caption">{formatDate(notification.created_at)}</Text>
        <Text variant="caption">{formatTime(notification.created_at)}</Text>
      </Stack>
    </Flex>
  );
}
