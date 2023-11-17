import { useMutation } from '@tanstack/react-query';

import { UpdateProjectAvatar, UpdateProjectAvatarID } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useAddAvatar = () =>
  useMutation({
    mutationFn: (data: UpdateProjectAvatarID & UpdateProjectAvatar) =>
      api.projectsApi.uploadProjectAvatar(data),
  });
