import React from 'react';

import { Filter } from '~/entities/project';

interface FilterGuestProps {
  totalItems?: number;
  isLoading?: boolean;
}

export const FilterGuest = ({ isLoading, totalItems }: FilterGuestProps) => {
  return <Filter totalItems={totalItems} isLoading={isLoading} />;
};
