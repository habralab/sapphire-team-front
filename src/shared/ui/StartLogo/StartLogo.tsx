import { Icon } from '@chakra-ui/react';

import { ReactComponent as IconLogo } from './icon-logo.svg';

export function StartLogo() {
  return <Icon as={IconLogo} w={{ base: 100, sm: 190 }} height="auto" />;
}
