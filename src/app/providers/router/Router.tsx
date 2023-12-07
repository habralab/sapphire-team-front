import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { BlankPage } from '~/pages/blank';

import { api } from '~/shared/api';

import { Layout } from './Layout';

const closedRouter = createBrowserRouter([
  {
    path: '*',
    element: <BlankPage />,
  },
]);

const normalRouter = createBrowserRouter([
  {
    path: '*',
    element: <Layout />,
    loader: async () => {
      try {
        return api.userApi.isAuth();
      } catch (e) {
        return null;
      }
    },
  },
]);

export const RouterProvider = () => {
  return (
    <ReactRouterProvider
      router={import.meta.env.VITE_CLOSED ? closedRouter : normalRouter}
    />
  );
};
