import { Icon, IconButton } from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';

import { useIsMobile } from '~/shared/hooks';
import { SText } from '~/shared/ui/SText';

export const AddProject = () => {
  const isMobile = useIsMobile();

  return (
    <IconButton
      aria-label="add-project"
      gap={2}
      minW={['8', '8', '10']}
      h={['8', '8', '10']}
      flexShrink="0"
      padding={['0', '0', '4']}
      icon={
        <>
          <SText fontSize="sm" fontWeight="normal" hidden={isMobile}>
            Создать проект
          </SText>
          <Icon as={BsPlus} />
        </>
      }
    />
  );
};
