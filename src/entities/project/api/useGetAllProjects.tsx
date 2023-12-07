import { QueryFunctionContext, QueryKey, useInfiniteQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetAllProjects = (userId: string) =>
  useInfiniteQuery({
    queryKey: ['getAllProjects', userId],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext<QueryKey, number>) =>
      api.projectsApi.getAllProjects({
        page: pageParam,
        user_id: userId,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    staleTime: 5000,
  });
