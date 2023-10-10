import { Flex, Icon, Link } from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { Counter } from '~/shared/ui/Counter';

export const FilterProject = () => {
  const dummyFilter = 5;
  return (
    <Link>
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        bg="gray.900"
        color="white"
        width="2.25rem"
        height="2.25rem"
        borderRadius="50%"
      >
        <Icon as={IoOptions} boxSize="1.625rem" />
        <Counter count={dummyFilter} />
      </Flex>
    </Link>
  );
};
