import { useAuth } from '~/shared/hooks';

import { NotAuthNotificationsPage } from './NotAuthNotificatiosPage';
import { NotificationsBase } from './NotificationsBase';

export const NotificationsPage = () => {
  const user = useAuth();
  return !user.userId ? <NotAuthNotificationsPage /> : <NotificationsBase />;
};
