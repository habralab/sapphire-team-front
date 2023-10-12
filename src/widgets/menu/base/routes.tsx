import { Icon, Search2Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { IoChatbubbles, IoPerson } from 'react-icons/io5';

import { PATHS } from '~/shared/lib/router';
import { Counter } from '~/shared/ui/Counter';

import { MenuRoute } from './MenuBase.types';

export const routes: MenuRoute[] = [
  {
    path: PATHS.search,
    name: 'Поиск',
    icon: ({ size }) => <Search2Icon boxSize={size} />,
  },
  {
    path: PATHS.projects,
    name: 'Проекты',
    icon: ({ size }) => <Icon as={BsFillBriefcaseFill} boxSize={size} />,
  },
  {
    path: PATHS.chats,
    name: 'Чаты',
    icon: ({ size, value }) => (
      <Flex position="relative" alignItems="center" justifyContent="center">
        <Icon as={IoChatbubbles} boxSize={size} />
        <Counter count={value} />
      </Flex>
    ),
  },
  {
    path: PATHS.profile,
    name: 'Профиль',
    icon: ({ size }) => <Icon as={IoPerson} boxSize={size} />,
  },
];
