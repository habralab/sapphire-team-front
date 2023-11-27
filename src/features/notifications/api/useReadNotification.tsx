import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useReadNotification = (notificationId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.notificationsApi.read(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries(['notifications']);
    },
  });
};
