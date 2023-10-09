import { Search2Icon } from '@chakra-ui/icons';

import { PATH_PAGE } from '~/shared/lib/react-router';

import { MenuRoute, routes as baseRoutes } from '../base';

export const routes: MenuRoute[] = [
  ...baseRoutes,
  {
    path: PATH_PAGE.search,
    name: 'Поиск',
    icon: (size) => <Search2Icon boxSize={size} />,
    divided: true,
  },
];
