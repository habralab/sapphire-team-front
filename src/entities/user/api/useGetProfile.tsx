import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useProfile = (id: string) =>
  useQuery({
    queryKey: ['profile', id],
    queryFn: () => api.userApi.get(id),
  });
