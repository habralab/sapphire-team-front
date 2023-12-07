import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useReadNotification = (notificationId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.notificationsApi.read(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries(['notifications']);
      queryClient.invalidateQueries(['unreadNotificatiions']);
    },
  });
};
