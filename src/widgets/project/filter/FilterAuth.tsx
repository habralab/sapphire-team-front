import React from 'react';

import { Filter } from '~/entities/project';
import { useGetProfile } from '~/entities/user';

interface FilterAuthProps {
  userId: string;
  totalItems?: number;
  isLoading?: boolean;
}

export const FilterAuth = ({ userId, isLoading, totalItems }: FilterAuthProps) => {
  const { isLoading: isLoadingUser, data: user } = useGetProfile(userId);
  return !isLoadingUser ? (
    <Filter totalItems={totalItems} isLoading={isLoading} user={user} />
  ) : null;
};
