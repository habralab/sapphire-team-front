import { Icon, Search2Icon } from '@chakra-ui/icons';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { IoChatbubbles, IoPerson } from 'react-icons/io5';

import { PATHS } from '~/shared/lib/router';

import { MenuRoute } from './MenuBase.types';

export const routes: MenuRoute[] = [
  {
    path: PATHS.search,
    name: 'Поиск',
    icon: <Search2Icon fontSize="2xl" />,
    isPublic: true,
  },
  {
    path: PATHS.projects,
    name: 'Проекты',
    icon: <Icon as={BsFillBriefcaseFill} fontSize="2xl" />,
    isPublic: true,
  },
  {
    path: PATHS.chats,
    name: 'Чаты',
    icon: <Icon as={IoChatbubbles} fontSize="2xl" />,
    isPublic: true,
  },
  {
    path: PATHS.profileMe,
    name: 'Профиль',
    icon: <Icon as={IoPerson} fontSize="2xl" />,
    isPublic: true,
  },
];
