import { BasePageProps } from '~/shared/lib/router';

import { NotAuthProfilePage } from './NotAuthProfilePage';
import { ProfilePageBase } from './ProfilePageBase';

export const ProfilePage = ({ user }: BasePageProps) => {
  return !user.userId ? <NotAuthProfilePage /> : <ProfilePageBase />;
};
