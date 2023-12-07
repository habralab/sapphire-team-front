import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetProjectAvatar = (projectId: string) =>
  useQuery({
    queryKey: ['useGetProjectAvatar', projectId],
    queryFn: () => api.projectsApi.getProjectAvatar(projectId),
  });
