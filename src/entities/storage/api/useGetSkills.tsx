import { useQueries } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetSkills = (projectPositions?: string[][]) =>
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
