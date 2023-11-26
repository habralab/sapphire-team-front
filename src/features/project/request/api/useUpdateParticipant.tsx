import { useMutation } from '@tanstack/react-query';

import { UpdateParticipantParams, UpdateParticipantRequest } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useUpdateParticipant = () =>
  useMutation({
    mutationFn: (data: UpdateParticipantRequest & UpdateParticipantParams) =>
      api.projectsApi.updateParticipant(data),
  });
