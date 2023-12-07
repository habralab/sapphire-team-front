import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetSpecs = () =>
  useQuery({
    queryKey: ['specs'],
    queryFn: async () => {
      const { data } = await api.storageApi.getSpecs();
      return data;
    },
  });
