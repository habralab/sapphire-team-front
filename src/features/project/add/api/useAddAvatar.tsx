import { useMutation } from '@tanstack/react-query';

import { UpdateProjectAvatar, UpdateProjectAvatarID } from '~/shared/api';
import { api } from '~/shared/contexts';

export const useAddAvatar = () =>
  useMutation({
    mutationFn: (data: UpdateProjectAvatarID & UpdateProjectAvatar) =>
      api.projectsApi.uploadProjectAvatar(data),
  });
