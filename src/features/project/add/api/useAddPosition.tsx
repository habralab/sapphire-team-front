import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { CreatePositionRequest } from '~/shared/api/model';

export const useAddPosition = () =>
  useMutation({
    mutationFn: (data: CreatePositionRequest) => api.projectsApi.createPosition(data),
  });
