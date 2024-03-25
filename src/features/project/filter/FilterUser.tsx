import type { FilterSpecOptions } from '~/shared/types';

import { FilterAuth } from './FilterAuth';
import { FilterGuest } from './FilterGuest';

interface FilterUserProps {
  userId?: string;
  totalItems?: number;
  isLoading?: boolean;
}

export const FilterUser = ({
  userId,
  isLoading,
  totalItems,
  FilterSpec,
}: FilterUserProps & FilterSpecOptions) => {
  console.log(userId);
  return !userId ? (
    <FilterGuest isLoading={isLoading} totalItems={totalItems} FilterSpec={FilterSpec} />
  ) : (
    <FilterAuth
      userId={userId}
      isLoading={isLoading}
      totalItems={totalItems}
      FilterSpec={FilterSpec}
    />
  );
};
