import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { UpdateProjectParams, UpdateProjectRequest } from '~/shared/api/model';

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateProjectRequest & UpdateProjectParams) =>
      api.projectsApi.updateProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['getCurrentProject']);
      queryClient.invalidateQueries(['getAllPositions']);
      queryClient.invalidateQueries(['getAllProjects']);
    },
  });
};
