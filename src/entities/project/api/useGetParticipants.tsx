import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { GetAllParticipantsRequest } from '~/shared/api/model';

export const useGetParticipants = (data: GetAllParticipantsRequest) =>
  useQuery({
    queryKey: ['getParticipants', data],
    queryFn: () => api.projectsApi.getParticipants(data),
  });
