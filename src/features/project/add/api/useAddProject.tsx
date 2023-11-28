import { useMutation } from '@tanstack/react-query';

import { NewProjectRequest } from '~/shared/api/model';
import { api } from '~/shared/contexts';

export const useAddProject = () =>
  useMutation({
    mutationFn: (data: NewProjectRequest) => api.projectsApi.addNewProject(data),
  });
