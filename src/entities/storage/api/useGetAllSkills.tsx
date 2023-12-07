import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetAllSkills = () =>
  useQuery({
    queryKey: ['skills'],
    queryFn: () => api.storageApi.getSkills({}),
    staleTime: Infinity,
  });
