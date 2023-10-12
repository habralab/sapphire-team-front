import { Flex, Icon } from '@chakra-ui/react';

import { ReactComponent as IconLogo } from './logoDesktop.svg';
import { ReactComponent as NameLogo } from './nameDesktop.svg';

export const LogoDesktop = () => {
  return (
    <Flex alignItems="center" gap={2} mb={2}>
      <Icon as={IconLogo} w={7} h={7} />
      <Icon as={NameLogo} w={20} />
    </Flex>
  );
};
