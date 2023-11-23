import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useUserStatistic = (id: string) =>
  useQuery({
    queryKey: ['statistic', id],
    queryFn: () => api.projectsApi.getStatistic(id),
  });
