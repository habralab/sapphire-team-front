import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useUserStatistic = (id: string) =>
  useQuery({
    queryKey: ['statistic', id],
    queryFn: () => api.projectsApi.getStatistic(id),
  });
