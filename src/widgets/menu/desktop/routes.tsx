import { Search2Icon } from '@chakra-ui/icons';

import { PATHS } from '~/shared/lib/router';

import { MenuRoute, routes as baseRoutes } from '../base';

export const routes: MenuRoute[] = [
  ...baseRoutes,
  {
    path: PATHS.search,
    name: 'Поиск',
    icon: (size) => <Search2Icon boxSize={size} />,
    divided: true,
  },
];
