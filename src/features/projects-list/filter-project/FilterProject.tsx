import { Flex, Icon, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { IoOptions } from 'react-icons/io5';

export const FilterProject = () => {
  const [filters, setFilters] = useState(true);
  const dummyFilter = 5;
  return (
    <Link>
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        bg="white"
        width="40px"
        height="40px"
        borderRadius="50%"
        ml="5px"
      >
        <Icon as={IoOptions} boxSize="25px"></Icon>
        {filters && (
          <Flex
            position="absolute"
            top="-8px "
            right="-8px"
            width="23px"
            height="23px"
            lineHeight="0"
            justifyContent="center"
            alignItems="center"
            bg="purple.600"
            color="white"
            fontSize={{
              base: 'sm',
              sm: 'sm',
              md: 'sm',
            }}
            fontWeight="500"
            borderRadius="50%"
            border="3px solid"
            borderColor="gray.100"
          >
            {dummyFilter}
          </Flex>
        )}
      </Flex>
    </Link>
  );
};
