import { WarningIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { BsCheck2All } from 'react-icons/bs';

import { Counter } from '~/shared/ui/Counter';

import type { MessageType } from '../../model';

interface StatusProps {
  status: MessageType['status'];
  count?: number;
}

export const Status = ({ status, count }: StatusProps) => {
  if (count) {
    return <Counter bg="gray.500" count={count} noBorder />;
  }
  return (
    <>
      {status === 'read' && <Icon as={BsCheck2All} color="purple.600" />}
      {status === 'sent' && <Icon as={BsCheck2All} color="gray.600" />}
      {status === 'error' && <Icon as={WarningIcon} color="red.500" />}
    </>
  );
};
