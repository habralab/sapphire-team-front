import { useQueries } from '@tanstack/react-query';

import { api } from '~/shared/api';
import type { GetProjectPositionsDataResponse } from '~/shared/api/model';

export const useGetPositionsSkills = (
  projectId: string,
  projectPositions?: GetProjectPositionsDataResponse,
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
