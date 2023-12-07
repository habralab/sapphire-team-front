import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { UpdateProjectAvatarRequest } from '~/shared/api/model';

export const useAddAvatar = () =>
  useMutation({
    mutationFn: (data: UpdateProjectAvatarRequest) =>
      api.projectsApi.uploadProjectAvatar(data),
  });
