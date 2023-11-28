import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Identificator, UpdateUserAvatar } from '~/shared/api/model';
import { api } from '~/shared/contexts';

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
