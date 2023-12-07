import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetSkillsByIds = (skills?: string[]) =>
  useQuery({
    queryKey: ['skills', skills],
    queryFn: () => api.storageApi.getSkills({ id: skills }),
    enabled: !!skills?.length,
  });
