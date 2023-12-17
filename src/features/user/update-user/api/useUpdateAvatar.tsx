import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '~/shared/api';
import type { Identificator, UpdateUserAvatar } from '~/shared/api/model';

export const useUpdateAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, avatar }: Identificator & UpdateUserAvatar) =>
      api.userApi.uploadAvatar({ id, avatar }),
    onSuccess: () => {
      queryClient.invalidateQueries(['avatar']);
    },
  });
};
