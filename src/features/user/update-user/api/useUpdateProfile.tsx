import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UpdateUserRequest } from '~/shared/api/types';
import { api } from '~/shared/contexts';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserRequest) => api.userApi.update(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['profile']);
      // queryClient.setQueryData(['profile', { id: data.id }], data);
    },
  });
};
