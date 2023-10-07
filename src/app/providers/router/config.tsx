import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/BlankPage';
import { Layout } from '~/pages/Layout';
import { NotFound } from '~/pages/NotFound';
import { SearchPage } from '~/pages/SearchPage';

const appClosed = [{ path: '*', element: <BlankPage /> }];

const normalRoutes = [
  { path: '/test', element: <Layout Mobile={<SearchPage />} Desktop={<BlankPage />} /> },
  { path: '/test2', element: <Layout Mobile={<SearchPage />} /> },
  { path: '/search', element: <SearchPage /> },
  { path: '404', element: <NotFound /> },
  { path: '*', element: <Navigate to={'404'} replace /> },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
