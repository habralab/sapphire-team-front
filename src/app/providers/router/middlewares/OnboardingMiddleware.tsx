import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import { isBaseMiddleware } from './isBaseMiddleware';
import { Middleware } from './middleware.types';

export const OnboardingMiddleware: Middleware = (path, component) => {
  const user = useAuth();

  if (isBaseMiddleware(path)) return component;

  if (user.isAuth && !user.isActivated && PATHS.onboarding !== path) {
    return null;
  }

  return component;
};
