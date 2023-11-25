import { BasePageProps } from '~/shared/lib/router';

import { NotAuthNotificationsPage } from './NotAuthNotificatiosPage';
import { NotificationsBase } from './NotificationsBase';

export const NotificationsPage = ({ user }: BasePageProps) => {
  return !user.userId ? <NotAuthNotificationsPage /> : <NotificationsBase />;
};
