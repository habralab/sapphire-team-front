import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/api';
import type { AddSkillsRequest, UpdateSkillsParams } from '~/shared/api/model';

export const useAddSkills = () =>
  useMutation({
    mutationFn: (data: UpdateSkillsParams & { skills: AddSkillsRequest }) =>
      api.projectsApi.updateSkills(data),
  });
