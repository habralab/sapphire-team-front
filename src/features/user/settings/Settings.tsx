import { Icon, IconButton } from '@chakra-ui/react';
import { IoSettings } from 'react-icons/io5';

export function Settings() {
  return (
    <IconButton
      variant="flat"
      aria-label="notification"
      icon={<Icon as={IoSettings} />}
    />
  );
}
