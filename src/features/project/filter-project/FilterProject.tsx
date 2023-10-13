import { Icon, IconButton, Text } from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';

export const FilterProject = () => {
  const isMobile = useIsMobile();

  return (
    <IconButton
      aria-label="filter"
      flexShrink="0"
      gap={2}
      padding={['0', '0', '4']}
      fontWeight="normal"
      icon={
        <>
          <Text hidden={isMobile}>Все фильтры</Text>
          <Icon as={IoOptions} />
          <Counter count={5} float />
        </>
      }
    ></IconButton>
  );
};
