import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetUnreadNotification = (isAuth: boolean) =>
  useQuery({
    queryKey: ['unreadNotificatiions'],
    queryFn: () => api.notificationsApi.getUnreadCount({ is_read: false }),
    staleTime: 5000,
    enabled: isAuth,
  });
