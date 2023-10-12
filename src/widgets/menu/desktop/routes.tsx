import { Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { IoNotifications, IoSettings } from 'react-icons/io5';

import { PATHS } from '~/shared/lib/router';
import { Counter } from '~/shared/ui/Counter';

import { MenuRoute, routes as baseRoutes } from '../base';

export const routes: MenuRoute[] = [
  ...baseRoutes,
  {
    path: PATHS.notifications,
    name: 'Уведомления',
    icon: (size, count) => (
      <Flex position="relative" alignItems="center" justifyContent="center">
        <Icon as={IoNotifications} boxSize={size} />
        <Counter count={count} />
      </Flex>
    ),
    divided: true,
  },
  {
    path: PATHS.settings,
    name: 'Настройки',
    icon: (size) => <Icon as={IoSettings} boxSize={size} />,
  },
];
