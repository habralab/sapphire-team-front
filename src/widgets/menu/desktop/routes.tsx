import { Icon } from '@chakra-ui/icons';
import { IoNotifications, IoSettings } from 'react-icons/io5';

import { PATHS } from '~/shared/lib/router';

import type { MenuRoute } from '../base';
import { routes as baseRoutes } from '../base';

export const routes: MenuRoute[] = [
  ...baseRoutes,
  {
    path: PATHS.notifications,
    name: 'Уведомления',
    icon: <Icon as={IoNotifications} fontSize="2xl" />,
    divided: true,
  },
  {
    path: PATHS.settings,
    name: 'Настройки',
    icon: <Icon as={IoSettings} fontSize="2xl" />,
  },
];
