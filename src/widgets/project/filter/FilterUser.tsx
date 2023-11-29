import React from 'react';

import { Filter } from '~/entities/project';
import { useGetProfile } from '~/entities/user';

interface FilterUserProps {
  userId?: string;
  totalItems?: number | null;
  isLoading?: boolean;
}

export const FilterUser = ({ userId, isLoading, totalItems }: FilterUserProps) => {
  const { data: user } = useGetProfile(userId);
  return <Filter totalItems={totalItems} isLoading={isLoading} user={user} />;
};
