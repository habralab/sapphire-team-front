import { useMutation } from '@tanstack/react-query';

import { CreatePositionRequest } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useAddPosition = () =>
  useMutation({
    mutationFn: (data: CreatePositionRequest) => api.projectsApi.createPosition(data),
  });
