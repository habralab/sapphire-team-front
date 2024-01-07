import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetSpecsGroups = () =>
  useQuery({
    queryKey: ['specs', 'groups'],
    queryFn: async () => {
      const { data } = await api.storageApi.getSpecGroups();
      return data;
    },
  });
