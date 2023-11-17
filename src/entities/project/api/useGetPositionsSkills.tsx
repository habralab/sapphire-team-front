import { useQueries } from '@tanstack/react-query';

import { GetProjectPositionsData } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useGetPositionsSkills = (
  projectId: string,
  projectPositions?: GetProjectPositionsData,
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
