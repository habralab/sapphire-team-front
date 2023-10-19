import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/blank';
import { ChatsPage, ChatsPageDesktop } from '~/pages/chats';
import { DialogPage } from '~/pages/dialog';
import { NotFoundPage } from '~/pages/not-found';
import { NotificationsPage } from '~/pages/notifications';
import { ProfilePage, ProfilePageDesktop } from '~/pages/profile';
import { ProjectsPage, ProjectsPageDesktop } from '~/pages/projects';
import { SearchPage, SearchPageDesktop } from '~/pages/search';

import { PATHS } from '~/shared/lib/router';

const appClosed = [
  {
    path: '*',
    view: {
      base: <BlankPage />,
    },
  },
];

const normalRoutes = [
  {
    path: PATHS.notFound,
    view: {
      base: <NotFoundPage />,
    },
  },
  {
    path: PATHS.profile,
    view: { base: <ProfilePage />, desktop: <ProfilePageDesktop /> },
  },
  {
    path: PATHS.projects,
    view: { base: <ProjectsPage />, desktop: <ProjectsPageDesktop /> },
  },
  { path: PATHS.search, view: { base: <SearchPage />, desktop: <SearchPageDesktop /> } },
  { path: PATHS.chats, view: { base: <ChatsPage />, desktop: <ChatsPageDesktop /> } },
  { path: PATHS.dialog, view: { base: <DialogPage />, desktop: <ChatsPageDesktop /> } },
  { path: PATHS.notifications, view: { base: <NotificationsPage /> } },

  {
    path: PATHS.root,
    view: {
      base: <Navigate to={PATHS.search} replace />,
    },
  },
  {
    path: '*',
    view: {
      base: <Navigate to={'404'} replace />,
    },
  },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
