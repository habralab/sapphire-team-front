import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { OnboardingMiddleware } from './middlewares/onboarding';
import { routerPaths } from './router.paths';

export const Routes = () => (
  <ReactRoutes>
    {routerPaths.map(({ Component, path }) =>
      OnboardingMiddleware(
        path,
        <Route key={path} path={path} element={<Component />} />,
      ),
    )}
  </ReactRoutes>
);
