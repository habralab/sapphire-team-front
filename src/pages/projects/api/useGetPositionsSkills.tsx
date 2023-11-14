/* eslint-disable @typescript-eslint/no-floating-promises */
import { useQueries } from '@tanstack/react-query';

import { getProjectPositionsData } from '~/shared/api';
import { api } from '~/shared/contexts';

export const useGetPositionsSkills = (
  projectPositions?: getProjectPositionsData,
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
