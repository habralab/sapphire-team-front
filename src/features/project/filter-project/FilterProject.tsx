import { Icon, Link } from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { Counter } from '~/shared/ui/Counter';

export const FilterProject = () => {
  const dummyFilter = 5;
  return (
    <Link
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
      color="white"
      padding={1.5}
      flexShrink={0}
      borderRadius="full"
    >
      <Icon as={IoOptions} />
      <Counter count={dummyFilter} />
    </Link>
  );
};
