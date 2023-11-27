import { QueryFunctionContext, QueryKey, useInfiniteQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';
import { SelectOptions } from '~/shared/types';

interface Search {
  specs?: string[];
  skills?: SelectOptions[];
  date?: string;
  searchText?: string;
}

export const useGetAllPositions = ({ specs, skills, date, searchText }: Search) =>
  useInfiniteQuery({
    queryKey: ['getAllPositions', { specs, skills, date, searchText }],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext<QueryKey, number>) =>
      api.projectsApi.getAllPositions({
        page: pageParam,
        specialization_ids: specs,
        skills_ids: skills?.map((skill) => skill.value),
        project_startline_le: date,
        project_query_text: searchText,
        // project_status: ['preparation', 'in_work'],
      }),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    staleTime: 5000,
  });
