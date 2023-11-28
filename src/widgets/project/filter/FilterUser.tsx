import React from 'react';

import { Filter } from '~/entities/project';
import { useGetProfile } from '~/entities/user';

interface FilterUserProps {
  userId: string;
  totalItems?: number | null;
  isLoading?: boolean;
}

export const FilterUser = ({ userId, isLoading, totalItems }: FilterUserProps) => {
  const { data: user, isSuccess } = useGetProfile(userId);
  return isSuccess ? (
    <Filter totalItems={totalItems} isLoading={isLoading} user={user} />
  ) : null;
};
