import { QueryFunctionContext, QueryKey, useInfiniteQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';
import { SelectOptions } from '~/shared/types';

interface Search {
  specs?: string[];
  skills?: SelectOptions[];
  date?: string;
  searchText?: string;
}

export const useGetAllProjects = ({ specs, skills, date, searchText }: Search) =>
  useInfiniteQuery({
    queryKey: ['getAllProjects', { specs, skills, date, searchText }],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext<QueryKey, number>) =>
      api.projectsApi.getAllProjects({
        page: pageParam,
        position_skill_ids: specs,
        position_specialization_ids: skills?.map((skill) => skill.value),
        startline_le: date,
        query_text: searchText,
      }),
    getNextPageParam: (lastPage) => lastPage.page + 1,
    staleTime: 5000,
  });
