import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/BlankPage';
import { NotFound } from '~/pages/NotFound';
import { ProfilePage } from '~/pages/ProfilePage';

const appClosed = [
  {
    path: '*',
    view: {
      all: <BlankPage />,
    },
  },
];

const normalRoutes = [
  {
    path: '/test',
    view: {
      mobile: <NotFound />,
      desktop: <BlankPage />,
    },
  },
  {
    path: '/test2',
    view: {
      mobile: <NotFound />,
    },
  },
  {
    path: '404',
    view: {
      all: <NotFound />,
    },
  },
  { path: '/profile', view: { base: <ProfilePage /> } },
  {
    path: '*',
    view: {
      all: <Navigate to={'404'} replace />,
    },
  },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
