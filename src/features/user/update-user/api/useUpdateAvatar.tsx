import { useMutation } from '@tanstack/react-query';

import { Identificator, UpdateUserAvatar } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useUpdateAvatar = () =>
  useMutation({
    mutationFn: ({ id, avatar }: Identificator & UpdateUserAvatar) =>
      api.userApi.uploadAvatar({ id, avatar }),
  });
