import { HStack, Icon, IconButton, Text } from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { useIsMobile } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export const AddProject = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <IconButton
      aria-label="add-project"
      onClick={() => {
        navigate(PATHS.addProject);
      }}
      gap={2}
      minW={['8', '8', '10']}
      h={['8', '8', '10']}
      flexShrink="0"
      padding={['0', '0', '4']}
      icon={
        <HStack fontWeight="semibold">
          <Text hidden={isMobile}>Создать проект</Text>
          <Icon as={BsPlus} fontSize="2xl" />
        </HStack>
      }
    />
  );
};
