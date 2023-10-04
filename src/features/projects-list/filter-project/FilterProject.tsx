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
        width="36px"
        height="36px"
        borderRadius="50%"
        ml="5px"
      >
        <Icon as={IoOptions} boxSize="25px" />
        {filters && (
          <Flex
            position="absolute"
            top="-4px "
            right="-3px"
            width="16px"
            height="16px"
            lineHeight="0"
            justifyContent="center"
            alignItems="center"
            bg="purple.600"
            color="white"
            fontSize={{
              base: 'xs',
              sm: 'xs',
              md: 'xs',
            }}
            fontWeight="500"
            borderRadius="50%"
            border="2px solid"
            borderColor="gray.100"
          >
            {dummyFilter}
          </Flex>
        )}
      </Flex>
    </Link>
  );
};
