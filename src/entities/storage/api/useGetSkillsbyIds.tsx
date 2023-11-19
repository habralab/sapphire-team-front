import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetSkillsByIds = (skills?: string[]) =>
  useQuery({
    queryKey: ['skills', skills],
    queryFn: () => api.storageApi.getSkills(skills),
    enabled: !!skills?.length,
  });
