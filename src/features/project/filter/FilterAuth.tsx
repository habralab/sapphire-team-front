import { IconButton, Spinner } from '@chakra-ui/react';
import React from 'react';

import { Filter } from '~/entities/project';
import { useGetProfile } from '~/entities/user';

import { useIsMobile } from '~/shared/hooks';
import type { FilterSpecOptions } from '~/shared/types';

interface FilterAuthProps {
  userId: string;
  totalItems?: number;
  isLoading?: boolean;
}

export const FilterAuth = ({
  userId,
  isLoading,
  totalItems,
  FilterSpec,
}: FilterAuthProps & FilterSpecOptions) => {
  const { isLoading: isLoadingUser, data: user } = useGetProfile(userId);
  const isMobile = useIsMobile();
  return !isLoadingUser ? (
    <Filter
      totalItems={totalItems}
      isLoading={isLoading}
      user={user}
      FilterSpec={FilterSpec}
    />
  ) : (
    <IconButton
      size="md"
      isDisabled={true}
      aria-label="Все фильтры"
      flexShrink="0"
      gap={2}
      padding={isMobile ? 0 : 4}
      fontWeight="normal"
      icon={
        <>
          {/* <Text hidden={isMobile}>Все фильтры</Text>
          <Icon as={IoOptions} fontSize="2xl" /> */}
          <Spinner />
        </>
      }
    />
  );
};
