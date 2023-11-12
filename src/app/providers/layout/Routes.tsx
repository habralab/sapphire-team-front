import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { useIsMobile, useAuth } from '~/shared/hooks';
import { BasePage } from '~/shared/lib/router';

import { normalRoutes } from '../router/config';

export function Routes() {
  const isMobile = useIsMobile();
  const user = useAuth();

  return (
    <ReactRoutes>
      {normalRoutes
        .map((props) => {
          let Element = props.view.base as BasePage;
          const notAuthBase = props.view.notAuthBase;
          const notAuthDesktop = props.view.notAuthDesktop;
          const desktop = props.view.desktop;

          if (!user.isAuth && notAuthDesktop && !isMobile) {
            Element = notAuthDesktop;
          } else if (!user.isAuth && notAuthBase) {
            Element = notAuthBase;
          } else if (!isMobile && desktop) {
            Element = desktop;
          }

          if (!props.isPublic && !user.isAuth) {
            return null;
          } else {
            return (
              <Route
                key={props.path}
                path={props.path}
                element={<Element isPublic={props.isPublic} user={user} />}
              />
            );
          }
        })
        .filter(Boolean)}
    </ReactRoutes>
  );
}
