import { useMutation } from '@tanstack/react-query';

import { AddSkillsRequest, UpdateSkillsParams } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useAddSkills = () =>
  useMutation({
    mutationFn: (data: UpdateSkillsParams & { skills: AddSkillsRequest }) =>
      api.projectsApi.updateSkills(data),
  });