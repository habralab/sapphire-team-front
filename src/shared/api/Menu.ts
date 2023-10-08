import { PATH_PAGE } from '../lib/react-router';

export const mainMenu = [
  { path: PATH_PAGE.search, name: 'Поиск', icon: 'searchIcon' },
  {
    path: PATH_PAGE.projects,
    name: 'Проекты',
    icon: 'projectIcon',
  },
  {
    path: PATH_PAGE.chats,
    name: 'Чаты',
    icon: 'chatIcon',
  },
  {
    path: PATH_PAGE.profile,
    name: 'Профиль',
    icon: 'profileIcon',
  },
];
