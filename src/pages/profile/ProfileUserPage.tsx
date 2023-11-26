import { Navigate } from 'react-router-dom';

import { BasePageProps, PATHS } from '~/shared/lib/router';

import { ProfileUserPageBase } from './ProfileUserPageBase';

export function ProfileUserPage({ user }: BasePageProps) {
  return user.isAuth ? <ProfileUserPageBase /> : <Navigate to={PATHS.notFound} replace />;
}
