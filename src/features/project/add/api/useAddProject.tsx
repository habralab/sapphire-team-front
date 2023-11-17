import { useMutation } from '@tanstack/react-query';

import { NewProjectParams } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useAddProject = () =>
  useMutation({
    mutationFn: (data: NewProjectParams) => api.projectsApi.addNewProject(data),
  });
