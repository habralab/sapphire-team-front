import { useQuery } from '@tanstack/react-query';

import { GetAllParticipantsRequest } from '~/shared/api/model';
import { api } from '~/shared/contexts';

export const useGetParticipants = (data: GetAllParticipantsRequest) =>
  useQuery({
    queryKey: ['getParticipants', data],
    queryFn: () => api.projectsApi.getParticipants(data),
  });
