import { IconButton, Icon, Box } from '@chakra-ui/react';
import { IoNotifications } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { Counter } from '~/shared/ui/Counter';

export function NotificationButton() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <IconButton
      isDisabled={!isAuth}
      size="sm"
      variant="flat"
      aria-label="notification"
      onClick={() => {
        navigate(PATHS.notifications);
      }}
      icon={
        <Box position="relative">
          <Icon as={IoNotifications} fontSize="2xl" />
          <Counter count={2} float borderBg="bg" />
        </Box>
      }
    />
  );
}
