import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { useIsMobile, useAuth } from '~/shared/hooks';

import { normalRoutes } from '../router/config';

export function Routes() {
  const isMobile = useIsMobile();
  const { isAuth } = useAuth();

  return (
    <ReactRoutes>
      {normalRoutes
        .map((props) => {
          let element = props.view.base;
          const notAuthBase = props.view.notAuthBase;
          const notAuthDesktop = props.view.notAuthDesktop;
          const desktop = props.view.desktop;

          if (!isAuth && notAuthDesktop && !isMobile) {
            element = notAuthDesktop;
          } else if (!isAuth && notAuthBase) {
            element = notAuthBase;
          } else if (!isMobile && desktop) {
            element = desktop;
          }

          if (!props.isPublic && !isAuth) {
            return null;
          } else {
            return <Route key={props.path} path={props.path} element={element} />;
          }
        })
        .filter(Boolean)}
    </ReactRoutes>
  );
}
