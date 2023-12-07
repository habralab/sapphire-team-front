import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetProfile = (id: string) =>
  useQuery({
    queryKey: ['profile', id],
    queryFn: () => api.userApi.get(id),
  });
