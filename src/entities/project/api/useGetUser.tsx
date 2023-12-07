import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/api';

export const useGetUser = (userID: string) =>
  useQuery({
    queryKey: ['userID', userID],
    queryFn: () => api.userApi.get(userID),
  });
