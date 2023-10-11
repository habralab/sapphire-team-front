import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/BlankPage';
import { NotFound } from '~/pages/NotFound';
import { ProfilePage } from '~/pages/ProfilePage';
import { SearchPage } from '~/pages/SearchPage';

import { PATH_PAGE } from '~/shared/lib/react-router';

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
    path: PATH_PAGE.notFound,
    view: {
      base: <NotFound />,
    },
  },
  { path: PATH_PAGE.profile, view: { base: <ProfilePage /> } },
  { path: PATH_PAGE.search, view: { base: <SearchPage /> } },
  {
    path: '*',
    view: {
      base: <Navigate to={'404'} replace />,
    },
  },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
