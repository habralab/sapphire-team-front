import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetUnreadNotification = (isAuth: boolean) =>
  useQuery({
    queryKey: ['unreadNotificatiions'],
    queryFn: () => api.notificationsApi.getUnreadCount({ is_read: false }),
    staleTime: 10000,
    enabled: isAuth,
  });
