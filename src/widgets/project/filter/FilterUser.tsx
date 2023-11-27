import React from 'react';

import { Filter } from '~/entities/project';
import { useGetProfile } from '~/entities/user';

interface FilterUserProps {
  userId: string;
  totalItems?: number | null;
  isLoading?: boolean;
}

export const FilterUser = ({ userId, isLoading, totalItems }: FilterUserProps) => {
  const { data: userData, isSuccess: loadedUserData } = useGetProfile(userId);
  return loadedUserData ? (
    <Filter totalItems={totalItems} isLoading={isLoading} userData={userData} />
  ) : null;
};
