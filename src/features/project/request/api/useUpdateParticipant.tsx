import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UpdateParticipantParams, UpdateParticipantRequest } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useUpdateParticipant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateParticipantRequest & UpdateParticipantParams) =>
      api.projectsApi.updateParticipant(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['getParticipants']);
    },
  });
};
