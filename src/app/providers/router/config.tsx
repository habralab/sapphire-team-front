import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/blank';
import { NotFoundPage } from '~/pages/not-found';
import { ProfilePage } from '~/pages/profile';
import { SearchPage } from '~/pages/search';

import { PATHS } from '~/shared/lib';

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
  { path: PATHS.search, view: { base: <SearchPage /> } },
  {
    path: '*',
    view: {
      base: <Navigate to={'404'} replace />,
    },
  },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
