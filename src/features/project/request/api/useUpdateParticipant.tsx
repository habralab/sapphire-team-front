import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UpdateParticipantRequest } from '~/shared/api/model';
import { api } from '~/shared/contexts';

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
