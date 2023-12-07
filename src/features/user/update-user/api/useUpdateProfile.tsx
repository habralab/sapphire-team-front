import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { UpdateUserRequest } from '~/shared/api/model';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserRequest) => api.userApi.update(data),
    onSuccess: (data) => {
      queryClient.setQueryData(['profile', data.id], data);
    },
  });
};
