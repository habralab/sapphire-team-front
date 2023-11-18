import { QueryFunctionContext, QueryKey, useInfiniteQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetAllProjects = (
  specsIds?: string[],
  skillsIds?: { value: string; label: string }[],
  date?: string,
  searchText?: string,
) =>
  useInfiniteQuery({
    queryKey: ['getAllProjects', specsIds, skillsIds, date, searchText],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext<QueryKey, number>) =>
      api.projectsApi.getAllProjects(
        pageParam,
        null,
        specsIds,
        skillsIds,
        date,
        searchText,
      ),
    getNextPageParam: (lastPage) => lastPage.page + 1,
    staleTime: 5000,
  });
