import { useQueries } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetSkills = (projectPositions?: string[][]) =>
  useQueries({
    queries: projectPositions
      ? projectPositions.map((skills) => {
          return {
            queryKey: ['positionSkills', skills],
            queryFn: () => api.storageApi.getSkills({ id: skills }),
          };
        })
      : [],
  });
