import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetSpecs = () =>
  useQuery({
    queryKey: ['specs'],
    queryFn: () => api.storageApi.getSpecs(),
  });
