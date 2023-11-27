import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetNotification = (notificationId: string) =>
  useQuery({
    queryKey: ['notificatiions', notificationId],
    queryFn: () => api.notificationsApi.get(notificationId),
    staleTime: 15000,
  });
