import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { GetSpecsParams } from '~/shared/api/model';

export const useGetSpecs = (params?: GetSpecsParams) =>
  useQuery({
    queryKey: ['specs', params],
    queryFn: async () => {
      const { data } = await api.storageApi.getSpecs(params);
      return data;
    },
  });
