import { QueryFunctionContext, QueryKey, useInfiniteQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetAllProjects = (userId: string) =>
  useInfiniteQuery({
    queryKey: ['getAllProjects', userId],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext<QueryKey, number>) =>
      api.projectsApi.getAllProjects({ page: pageParam, owner_id: userId }),
    getNextPageParam: (lastPage) => lastPage.page + 1,
    staleTime: 5000,
  });
