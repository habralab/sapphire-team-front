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
        fontSize="sm"
        icon={
          <Link to={PATHS.notifications}>
            <Box position="relative">
              <Icon as={IoNotifications} />
              <Counter count={2} float />
            </Box>
          </Link>
        }
      />
    </>
  );
}
