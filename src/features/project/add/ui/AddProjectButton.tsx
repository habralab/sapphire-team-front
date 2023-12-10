import { HStack, Icon, IconButton, Text } from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { useIsMobile, useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export const AddProjectButton = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { isAuth } = useAuth();

  return isAuth ? (
    <IconButton
      aria-label="add-project"
      onClick={() => {
        navigate(PATHS.addProject);
      }}
      h={'initial'}
      gap={2}
      flexShrink="0"
      px={isMobile ? 1 : 4}
      py={isMobile ? 1 : 2}
      icon={
        <HStack fontWeight="semibold">
          <Text hidden={isMobile}>Создать проект</Text>
          <Icon as={BsPlus} fontSize="2xl" />
        </HStack>
      }
    />
  ) : null;
};
