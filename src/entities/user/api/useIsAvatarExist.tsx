import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useIsAvatarExist = (id: string) =>
  useQuery({
    queryKey: ['avatar', id],
    queryFn: () => api.userApi.isAvatarExist(id),
  });