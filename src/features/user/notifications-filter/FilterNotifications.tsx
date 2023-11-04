import { Heading, Flex, VStack, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NotificationsDto, notifications } from '~/shared/lib/notifications';
import { PATHS } from '~/shared/lib/router';
import { SAvatar } from '~/shared/ui/SAvatar';

interface FilterNotificationsProps {
  setFilter?: (filter: NotificationsDto[]) => void;
}

export function FilterNotifications(props: FilterNotificationsProps) {
  const { setFilter } = props;
  const [active, setActive] = useState('all');

  const filterNotifications = (category: string) => {
    if (setFilter) {
      if (category === 'all') {
        setFilter(notifications);
      } else {
        setFilter(
          notifications.filter((notification) => notification.category === category),
        );
      }
      setActive(category);
    }
  };

  return (
    <VStack alignItems="start" bg="white" p={4} borderRadius="2xl" spacing={0} gap={4}>
      <Flex gap={2}>
        <SAvatar name="Татьяна Андреева" />
        <Flex direction="column" gap={1}>
          <Heading variant="h3">Татьяна Андреева</Heading>
          <Link to={PATHS.profile}>
            <Text variant="caption">Вернуться к профилю</Text>
          </Link>
        </Flex>
      </Flex>

      <Button
        variant="filter"
        color={active === 'all' ? 'gray.900' : 'gray.500'}
        onClick={() => {
          filterNotifications('all');
        }}
      >
        Все уведомления
      </Button>
      <Button
        variant="filter"
        color={active === 'response' ? 'gray.900' : 'gray.500'}
        onClick={() => {
          filterNotifications('response');
        }}
      >
        Ваши отклики
      </Button>
      <Button
        variant="filter"
        color={active === 'project' ? 'gray.900' : 'gray.500'}
        onClick={() => {
          filterNotifications('project');
        }}
      >
        Ваши проекты
      </Button>
      <Button
        variant="filter"
        color={active === 'review' ? 'gray.900' : 'gray.500'}
        onClick={() => {
          filterNotifications('review');
        }}
      >
        Отзывы
      </Button>
    </VStack>
  );
}
