import { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Loader } from '~/shared/ui/Loader';

import { routes } from './config';

const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((props) => (
            <Route {...props} key={props.path} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export { Routing };
