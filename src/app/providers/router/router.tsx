import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { BlankPage } from '~/pages/blank';

import { api } from '~/shared/contexts';

import { Layout } from '../layout/Layout';

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

const Routing = () => {
  return (
    <RouterProvider router={import.meta.env.VITE_CLOSED ? closedRouter : normalRouter} />
  );
};

export { Routing };
