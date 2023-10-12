import { Icon, IconButton } from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { SText } from '~/shared/ui/SText';

export const FilterProjectDesktop = () => {
  return (
    <IconButton
      padding="none"
      minWidth="none"
      gap={2}
      aria-label="filter"
      icon={
        <>
          <SText fontSize="sm" fontWeight="normal">
            Все фильтры
          </SText>
          <Icon as={IoOptions} />
        </>
      }
    ></IconButton>
  );
};
