import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetUserProject = (id: string) =>
  useQuery({
    queryKey: ['getUserProjects', id],
    queryFn: () =>
      api.projectsApi.getAllProjects({
        owner_id: id,
      }),
  });
