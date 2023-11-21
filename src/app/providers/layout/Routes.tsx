import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';

import { useIsMobile, useAuth } from '~/shared/hooks';
import { BasePage, PATHS } from '~/shared/lib/router';

import { normalRoutes } from '../router/config';

export function Routes() {
  const isMobile = useIsMobile();
  const user = useAuth();

  return (
    <ReactRoutes>
      {normalRoutes
        .map((props) => {
          let Element = props.view.base as BasePage;
          const desktop = props.view.desktop;

          if (!isMobile && desktop) {
            Element = desktop;
          }

          if (
            user.isAuth &&
            !user.isActivated &&
            ![PATHS.onboarding, PATHS.notFound].includes(props.path)
          ) {
            return (
              <Route
                key={props.path}
                path={props.path}
                element={<Navigate to={PATHS.notFound} replace />}
              />
            );
          }

          return (
            <Route key={props.path} path={props.path} element={<Element user={user} />} />
          );
        })
        .filter(Boolean)}
    </ReactRoutes>
  );
}
