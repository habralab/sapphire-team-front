import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetProject = (projectId?: string) =>
  useQuery({
    queryKey: ['getCurrentProject', projectId],
    queryFn: () => api.projectsApi.getCurrentProject(projectId),
  });
