import { Flex, Icon, Link } from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

export const FilterProject = () => {
  const dummyFilter = 5;
  return (
    <Link>
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        bg="white"
        width="2.25rem"
        height="2.25rem"
        borderRadius="50%"
      >
        <Icon as={IoOptions} boxSize="1.625rem" />
        <Flex
          position="absolute"
          top="-0.25rem"
          right="-0.25rem"
          width="1rem"
          height="1rem"
          lineHeight="0"
          justifyContent="center"
          alignItems="center"
          bg="purple.600"
          color="white"
          fontSize="xs"
          fontWeight="500"
          borderRadius="50%"
          border="0.125rem solid"
          borderColor="gray.100"
        >
          {dummyFilter}
        </Flex>
      </Flex>
    </Link>
  );
};
