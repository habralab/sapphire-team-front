import { Stack, Link } from '@chakra-ui/react';
import { Link as ReactLink, generatePath } from 'react-router-dom';

import { NotificationItem } from '~/entities/notification';

import { NotificationsDto } from '~/shared/lib/notifications';
import { PATHS } from '~/shared/lib/router';

interface NotificationListProps {
  notifications: NotificationsDto[];
}

export function NotificationList({ notifications }: NotificationListProps) {
  return (
    <Stack
      spacing={0}
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      flexGrow={1}
      h="fit-content"
    >
      {notifications.map((notification, i) => (
        <Link
          to={generatePath(PATHS.notification, { id: notification.id })}
          key={notification.id}
          as={ReactLink}
          borderBottom="1px"
          borderColor="gray.200"
          _last={{ border: 'none', paddingBottom: 2 }}
          _first={{ paddingTop: 2 }}
          _hover={{ textDecoration: 'none', bg: 'gray.200' }}
        >
          <NotificationItem
            key={i}
            status={notification.status}
            project={notification.project}
          />
        </Link>
      ))}
    </Stack>
  );
}
