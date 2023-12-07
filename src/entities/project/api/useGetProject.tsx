import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetProject = (projectId: string) =>
  useQuery({
    queryKey: ['getCurrentProject', projectId],
    queryFn: () => api.projectsApi.getCurrentProject(projectId),
  });
