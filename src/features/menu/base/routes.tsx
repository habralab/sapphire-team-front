import { Icon, Search2Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { IoChatbubbles, IoPerson } from 'react-icons/io5';

import { PATH_PAGE } from '~/shared/lib/react-router';
import { Counter } from '~/shared/ui/Counter';

import { MenuRoute } from './MenuBase.types';

export const routes: MenuRoute[] = [
  {
    path: PATH_PAGE.search,
    name: 'Поиск',
    icon: (size) => <Search2Icon boxSize={size} />,
  },
  {
    path: PATH_PAGE.projects,
    name: 'Проекты',
    icon: (size) => <Icon as={BsFillBriefcaseFill} boxSize={size} />,
  },
  {
    path: PATH_PAGE.chats,
    name: 'Чаты',
    icon: (size, count) => (
      <Flex position="relative" alignItems="center" justifyContent="center">
        <Icon as={IoChatbubbles} boxSize={size} />
        <Counter count={count} />
      </Flex>
    ),
  },
  {
    path: PATH_PAGE.profile,
    name: 'Профиль',
    icon: (size) => <Icon as={IoPerson} boxSize={size} />,
  },
];
