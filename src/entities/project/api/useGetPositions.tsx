import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetPositions = (projectId: string) =>
  useQuery({
    queryKey: ['getProjectPositions', projectId],
    queryFn: () => api.projectsApi.getProjectPositions(projectId),
  });
