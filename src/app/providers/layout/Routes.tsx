import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { normalRoutes } from '../router/config';
import { OnboardingMiddleware } from '../router/middlewares';

export function Routes() {
  return (
    <ReactRoutes>
      {normalRoutes.map(({ Component, path }) =>
        OnboardingMiddleware(
          path,
          <Route key={path} path={path} element={<Component />} />,
        ),
      )}
    </ReactRoutes>
  );
}
