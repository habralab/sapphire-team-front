import { Icon, IconButton } from '@chakra-ui/react';
import { IoSettings } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { useIsAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export function Settings() {
  const isAuth = useIsAuth();
  return (
    <IconButton
      isDisabled={!isAuth}
      size="sm"
      variant="flat"
      aria-label="settings"
      to={PATHS.settings}
      as={Link}
      icon={<Icon as={IoSettings} fontSize="2xl" />}
    />
  );
}
