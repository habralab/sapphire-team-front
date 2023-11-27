import { Navigate, useParams } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

import { NotificationBasePage } from './NotificationBasePage';

export function NotificationPage() {
  const { id: notificationId } = useParams();

  return !notificationId ? (
    <Navigate to={PATHS.notFound} replace />
  ) : (
    <NotificationBasePage notificationId={notificationId} />
  );
}
