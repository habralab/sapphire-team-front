import { useQuery } from '@tanstack/react-query';

import { GetAllParticipantsRequest } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useGetParticipants = (data: GetAllParticipantsRequest) =>
  useQuery({
    queryKey: ['getCurrentProject', data],
    queryFn: () => api.projectsApi.getParticipants(data),
  });