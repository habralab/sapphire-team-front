import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useUserSkills = (id: string) =>
  useQuery({
    queryKey: ['profile', 'skills', id],
    queryFn: () => api.userApi.getUserSkills(id),
  });
