import { useQueries } from '@tanstack/react-query';

import { GetProjectPositionsData } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useGetPositionsSkills = (
  projectPositions?: GetProjectPositionsData,
  projectId?: string,
) =>
  useQueries({
    queries: projectPositions
      ? projectPositions.map(({ id }) => {
          return {
            queryKey: ['positionSkills', projectId, id],
            queryFn: () => api.projectsApi.getPositionSkills(projectId, id),
          };
        })
      : [],
  });
