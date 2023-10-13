import { IconButton, Icon, Box } from '@chakra-ui/react';
import { IoNotifications } from 'react-icons/io5';

import { Counter } from '~/shared/ui/Counter';

export function Notification() {
  return (
    <>
      <IconButton
        variant="flat"
        aria-label="notification"
        icon={
          <Box position="relative">
            <Icon as={IoNotifications} />
            <Counter count={2} float />
          </Box>
        }
      />
    </>
  );
}
