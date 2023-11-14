/* eslint-disable @typescript-eslint/no-floating-promises */
import { useQuery } from '@tanstack/react-query';

import { api } from '~/shared/contexts';

export const useGetOwner = (ownerID?: string) =>
  useQuery({
    queryKey: ['ownerID', ownerID],
    queryFn: () => api.userApi.getUser(ownerID),
    enabled: !!ownerID,
  });
