import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { useIsMobile } from '~/shared/hooks';

import { OnboardingMiddleware } from './middlewares/onboarding';
import { routerPaths } from './router.paths';

export function Routes() {
  const isMobile = useIsMobile();

  return (
    <ReactRoutes>
      {routerPaths.map((props) => {
        let Component = props.view.base;
        const desktop = props.view.desktop;

        if (!isMobile && desktop) {
          Component = desktop;
        }

        return OnboardingMiddleware(
          props.path,
          <Route key={props.path} path={props.path} element={<Component />} />,
        );
      })}
    </ReactRoutes>
  );
}
