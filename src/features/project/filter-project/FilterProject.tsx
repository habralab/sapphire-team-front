import { Icon, IconButton } from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';
import { SText } from '~/shared/ui/SText';

export const FilterProject = () => {
  const isMobile = useIsMobile();

  return (
    <IconButton
      aria-label="filter"
      flexShrink="0"
      gap={2}
      padding={['0', '0', '4']}
      icon={
        <>
          <SText fontSize="sm" fontWeight="normal" hidden={isMobile}>
            Все фильтры
          </SText>
          <Icon as={IoOptions} />
          <Counter count={5} float />
        </>
      }
    ></IconButton>
  );
};
