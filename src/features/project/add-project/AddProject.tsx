import { HStack, Icon, IconButton, Text } from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';

import { useIsMobile } from '~/shared/hooks';

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
        <HStack fontWeight="semibold">
          <Text hidden={isMobile}>Создать проект</Text>
          <Icon as={BsPlus} />
        </HStack>
      }
    />
  );
};