import { Navigate } from 'react-router-dom';

import { BlankPage } from '~/pages/BlankPage';
import { NotFound } from '~/pages/NotFound';

import { ToDo } from '~/widgets/todo';

const appClosed = [{ path: '*', element: <BlankPage /> }];

const normalRoutes = [
  { path: '/', element: <ToDo /> },
  { path: '404', element: <NotFound /> },
  { path: '*', element: <Navigate to={'404'} replace /> },
];

export const routes = import.meta.env.VITE_CLOSED ? appClosed : normalRoutes;
