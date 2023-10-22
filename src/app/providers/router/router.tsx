import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Layout } from '~/pages/layout';

import { routes } from './config';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((props) => (
          <Route
            key={props.path}
            path={props.path}
            element={
              import.meta.env.VITE_CLOSED ? props.view.base : <Layout {...props.view} />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
