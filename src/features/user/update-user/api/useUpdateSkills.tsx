import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useUpdateSkills = () =>
  useMutation({
    mutationFn: ({ id, skills }: { id: string; skills: string[] }) =>
      api.userApi.updateUserSkills({ id, skills }),
  });
