import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/BlankPage';
import { NotFound } from '~/pages/NotFound';
import { ProfilePage } from '~/pages/ProfilePage';

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
    path: '/test',
    view: {
      base: <NotFound />,
      desktop: <BlankPage />,
    },
  },
  {
    path: '/test2',
    view: {
      base: <NotFound />,
    },
  },
  {
    path: '404',
    view: {
      base: <NotFound />,
    },
  },
  { path: '/profile', view: { base: <ProfilePage /> } },
  {
    path: '*',
    view: {
      base: <Navigate to={'404'} replace />,
    },
  },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
