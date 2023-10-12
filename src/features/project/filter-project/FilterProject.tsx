import { Icon, IconButton } from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { Counter } from '~/shared/ui';

export const FilterProject = () => {
  const dummyFilter = 5;
  return (
    <IconButton
      aria-label="filter"
      icon={
        <>
          <Icon as={IoOptions} />
          <Counter count={dummyFilter} />
        </>
      }
    ></IconButton>
  );
};
