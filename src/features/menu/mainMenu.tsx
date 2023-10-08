import { Icon, Search2Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { IoChatbubbles, IoPerson } from 'react-icons/io5';

import { PATH_PAGE } from '~/shared/lib/react-router';

interface IMainMenu {
  path: string;
  name: string;
  icon: (size: string, count?: number) => JSX.Element;
}

export const mainMenu: IMainMenu[] = [
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
        <Flex
          position="absolute"
          top="-0.25rem"
          right="-0.25rem"
          width="1rem"
          height="1rem"
          lineHeight="0"
          justifyContent="center"
          alignItems="center"
          bg="purple.600"
          color="white"
          fontSize="xs"
          fontWeight="500"
          borderRadius="50%"
          border="0.125rem solid"
          borderColor="gray.100"
        >
          {count}
        </Flex>
      </Flex>
    ),
  },
  {
    path: PATH_PAGE.profile,
    name: 'Профиль',
    icon: (size) => <Icon as={IoPerson} boxSize={size} />,
  },
];
