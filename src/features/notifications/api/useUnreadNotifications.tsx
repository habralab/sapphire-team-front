import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetUnreadNotification = () =>
  useQuery({
    queryKey: ['unreadNotificatiions'],
    queryFn: () => api.notificationsApi.getUnreadCount({ is_read: false }),
    staleTime: 10000,
  });
