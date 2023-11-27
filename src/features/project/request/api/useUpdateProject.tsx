import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UpdateProjectParams, UpdateProjectRequest } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateProjectRequest & UpdateProjectParams) =>
      api.projectsApi.updateProject(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries(['getCurrentProject', response.id]);
    },
  });
};
