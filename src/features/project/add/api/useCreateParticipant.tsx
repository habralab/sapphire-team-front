import { useMutation } from '@tanstack/react-query';

import { CreateParticipantRequest } from '~/shared/api/model';
import { api } from '~/shared/contexts';

export const useCreateParticipant = () =>
  useMutation({
    mutationFn: (data: CreateParticipantRequest) =>
      api.projectsApi.createParticipant(data),
  });
