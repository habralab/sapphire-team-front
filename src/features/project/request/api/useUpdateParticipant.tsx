import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { UpdateParticipantRequest } from '~/shared/api/model';

export const useUpdateParticipant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateParticipantRequest) =>
      api.projectsApi.updateParticipant(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['getParticipants']);
    },
  });
};
