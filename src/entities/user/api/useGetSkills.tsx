import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useUserSkills = (id: string) =>
  useQuery({
    queryKey: ['skills', id],
    queryFn: () => api.userApi.getUserSkills(id),
  });
