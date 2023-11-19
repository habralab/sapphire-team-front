import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useSkillsGroup = (ids: string[]) =>
  useQuery({
    queryKey: ['skills', ids],
    queryFn: () => api.storageApi.getSkills(ids),
    enabled: !!ids.length,
  });
