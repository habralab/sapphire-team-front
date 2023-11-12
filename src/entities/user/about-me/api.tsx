import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useProfile = (id: string) =>
  useQuery({
    queryKey: ['profile', id],
    queryFn: () => api.userApi.getUser(id),
  });

export const useSkills = (id: string) =>
  useQuery({
    queryKey: ['skills', id],
    queryFn: () => api.userApi.getUserSkills({ user_id: id }),
  });
