import { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Layout } from '~/pages/layout';

import { Loader } from '~/shared/ui/Loader';

import { routes } from './config';

const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((props) => (
            <Route
              key={props.path}
              path={props.path}
              element={<Layout {...props.view} />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export { Routing };
