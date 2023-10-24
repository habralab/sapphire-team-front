import { IconButton, Icon, Box } from '@chakra-ui/react';
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';
import { Counter } from '~/shared/ui/Counter';

export function Notification() {
  return (
    <>
      <IconButton
        variant="flat"
        aria-label="notification"
        as={Link}
        to={PATHS.notifications}
        icon={
          <Box position="relative">
            <Icon as={IoNotifications} fontSize="2xl" />
            <Counter count={2} float borderBg="bg" />
          </Box>
        }
      />
    </>
  );
}
