import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useDeleteAvatar = () =>
  useMutation({
    mutationFn: (id: string) => api.userApi.deleteAvatar(id),
  });
