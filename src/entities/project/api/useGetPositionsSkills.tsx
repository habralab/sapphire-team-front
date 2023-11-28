import { useQueries } from '@tanstack/react-query';

import { GetProjectPositionsDataResponse } from '~/shared/api/model';
import { api } from '~/shared/contexts';

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
