import { useMutation } from '@tanstack/react-query';

import { UpdateProjectAvatarRequest } from '~/shared/api/model';
import { api } from '~/shared/contexts';

export const useAddAvatar = () =>
  useMutation({
    mutationFn: (data: UpdateProjectAvatarRequest) =>
      api.projectsApi.uploadProjectAvatar(data),
  });
