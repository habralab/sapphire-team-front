import { FilterAuth } from './FilterAuth';
import { FilterGuest } from './FilterGuest';

interface FilterUserProps {
  userId?: string;
  totalItems?: number;
  isLoading?: boolean;
}

export const FilterUser = ({ userId, isLoading, totalItems }: FilterUserProps) => {
  return !userId ? (
    <FilterGuest isLoading={isLoading} totalItems={totalItems} />
  ) : (
    <FilterAuth userId={userId} isLoading={isLoading} totalItems={totalItems} />
  );
};
