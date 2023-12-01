import { useQuery } from '@tanstack/react-query';

import { GetSpecsParams } from '~/shared/api/model';
import { api } from '~/shared/contexts';

export const useGetSpecs = (params?: GetSpecsParams) =>
  useQuery({
    queryKey: ['specs', params],
    queryFn: async () => {
      const { data } = await api.storageApi.getSpecs(params);
      return data;
    },
  });
