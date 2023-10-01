import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/BlankPage';
import { NotFound } from '~/pages/NotFound';
import { SearchPage } from '~/pages/SearchPage';

const appClosed = [{ path: '*', element: <BlankPage /> }];

const normalRoutes = [
  { path: '404', element: <NotFound /> },
  { path: '*', element: <SearchPage /> },
  // { path: '*', element: <Navigate to={'404'} replace /> },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
