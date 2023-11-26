import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetAllSkills = () =>
  useQuery({
    queryKey: ['skills'],
    queryFn: () => api.storageApi.getSkills({}),
    staleTime: Infinity,
  });
