/* eslint-disable @typescript-eslint/no-floating-promises */
import { useQueries } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetSkillsValue = (projectPositions?: string[][]) =>
  useQueries({
    queries: projectPositions
      ? projectPositions.map((skills) => {
          return {
            queryKey: ['positionSkills', skills],
            queryFn: () => api.storageApi.getSkills(skills),
          };
        })
      : [],
  });
