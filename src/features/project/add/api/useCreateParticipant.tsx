import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { CreateParticipantRequest } from '~/shared/api/model';

export const useCreateParticipant = () =>
  useMutation({
    mutationFn: (data: CreateParticipantRequest) =>
      api.projectsApi.createParticipant(data),
  });
