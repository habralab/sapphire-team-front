import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { useIsMobile, useAuth } from '~/shared/hooks';
import { BasePage } from '~/shared/lib/router';

import { normalRoutes } from '../router/config';

export function Routes() {
  const isMobile = useIsMobile();
  const user = useAuth();

  return (
    <ReactRoutes>
      {normalRoutes.map((props) => {
        let Element = props.view.base as BasePage;
        const desktop = props.view.desktop;

        if (!isMobile && desktop) {
          Element = desktop;
        }

        return (
          <Route key={props.path} path={props.path} element={<Element user={user} />} />
        );
      })}
    </ReactRoutes>
  );
}
