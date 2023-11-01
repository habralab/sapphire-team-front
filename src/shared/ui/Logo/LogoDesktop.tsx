import { Icon, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

import { ReactComponent as IconLogo } from './logoDesktop.svg';
import { ReactComponent as NameLogo } from './nameDesktop.svg';

export const LogoDesktop = () => {
  return (
    <Link
      as={ReactLink}
      to="/search"
      display="flex"
      alignItems="center"
      gap={2}
      mb={2}
      px={2}
    >
      <Icon as={IconLogo} w={7} h={7} />
      <Icon as={NameLogo} w={20} />
    </Link>
  );
};
