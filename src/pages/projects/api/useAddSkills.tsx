/* eslint-disable @typescript-eslint/no-floating-promises */
import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useAddSkills = () =>
  useMutation({
    mutationFn: ({
      project_id,
      positon_id,
      skills,
    }: {
      project_id: string;
      positon_id: string;
      skills: string[];
    }) => api.projectsApi.updateSkills(project_id, positon_id, skills),
  });
