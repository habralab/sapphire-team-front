import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetPositions = (projectId: string) =>
  useQuery({
    queryKey: ['getProjectPositions', projectId],
    queryFn: async () => {
      const { data } = await api.projectsApi.getProjectPositions(projectId);
      return data;
    },
  });
