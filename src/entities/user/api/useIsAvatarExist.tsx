import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useIsAvatarExist = (id: string) =>
  useQuery({
    queryKey: ['avatar', 'IsAvatar', id],
    queryFn: () => api.userApi.isAvatarExist(id),
  });
