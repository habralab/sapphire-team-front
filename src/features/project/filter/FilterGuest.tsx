import React from 'react';

import { Filter } from '~/entities/project';

import type { FilterSpecOptions } from '~/shared/types';

interface FilterGuestProps {
  totalItems?: number;
  isLoading?: boolean;
}

export const FilterGuest = ({
  isLoading,
  totalItems,
  FilterSpec,
}: FilterGuestProps & FilterSpecOptions) => {
  return <Filter totalItems={totalItems} isLoading={isLoading} FilterSpec={FilterSpec} />;
};
