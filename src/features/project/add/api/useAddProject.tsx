import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { NewProjectRequest } from '~/shared/api/model';

export const useAddProject = () =>
  useMutation({
    mutationFn: (data: NewProjectRequest) => api.projectsApi.addNewProject(data),
  });
