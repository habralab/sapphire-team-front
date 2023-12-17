import type { QueryFunctionContext, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetNotifications = () =>
  useInfiniteQuery({
    queryKey: ['notifications'],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext<QueryKey, number>) =>
      api.notificationsApi.getList({ page: pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
    staleTime: 5000,
  });
