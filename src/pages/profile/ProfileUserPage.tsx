import { Navigate } from 'react-router-dom';

import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import { ProfileUserPageBase } from './ProfileUserPageBase';

export function ProfileUserPage() {
  const user = useAuth();
  return user.isAuth ? <ProfileUserPageBase /> : <Navigate to={PATHS.notFound} replace />;
}
