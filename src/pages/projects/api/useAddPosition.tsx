/* eslint-disable @typescript-eslint/no-floating-promises */
import { useMutation } from '@tanstack/react-query';

import { CreatePositionRequest } from '~/shared/api';
import { api } from '~/shared/contexts';

export const useAddPosition = () =>
  useMutation({
    mutationFn: ({
      project_id,
      position,
    }: {
      project_id: string;
      position: CreatePositionRequest;
    }) => api.projectsApi.createPosition(project_id, position),
  });
