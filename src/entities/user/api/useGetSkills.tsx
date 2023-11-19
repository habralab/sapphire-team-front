import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useSkills = (id: string) =>
  useQuery({
    queryKey: ['skills', id],
    queryFn: () => api.userApi.getUserSkills(id),
  });
