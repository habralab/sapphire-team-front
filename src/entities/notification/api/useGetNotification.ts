import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetNotification = (notificationId: string) =>
  useQuery({
    queryKey: ['notificatiions', notificationId],
    queryFn: () => api.notificationsApi.get(notificationId),
    staleTime: 15000,
  });
