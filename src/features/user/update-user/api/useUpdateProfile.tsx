import { useMutation } from '@tanstack/react-query';

import { UpdateUserRequest } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useUpdateProfile = () =>
  useMutation({
    mutationFn: (data: UpdateUserRequest) => api.userApi.update(data),
  });
