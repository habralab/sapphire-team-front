import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetAvatar = (id: string) =>
  useQuery({
    queryKey: ['avatar', id],
    queryFn: () => api.userApi.getAvatar(id),
  });
