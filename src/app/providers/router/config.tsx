import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/blank';
import { ChatsPage } from '~/pages/chats';
import { DialogPage } from '~/pages/dialog';
import { NotFoundPage } from '~/pages/not-found';
import { ProfilePage } from '~/pages/profile';
import { ProjectPage, ProjectPageDesktop } from '~/pages/projects';
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
  { path: PATHS.profile, view: { base: <ProfilePage /> } },
  {
    path: PATHS.projects,
    view: { base: <ProjectPage />, desktop: <ProjectPageDesktop /> },
  },
  { path: PATHS.search, view: { base: <SearchPage />, desktop: <SearchPageDesktop /> } },
  { path: PATHS.chats, view: { base: <ChatsPage /> } },
  { path: PATHS.dialog, view: { base: <DialogPage /> } },

  {
    path: '*',
    view: {
      base: <Navigate to={PATHS.search} replace />,
    },
  },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
