import { Center } from '@chakra-ui/react';

interface CounterType {
  count: number;
}

export function Counter(props: CounterType) {
  const { count } = props;

  return (
    <Center
      bg="purple.600"
      color="white"
      position="absolute"
      w="16px"
      h="16px"
      fontSize="xs"
      fontWeight="medium"
      border="1px"
      borderColor="inherit"
      borderRadius="full"
      right="-4px"
      top="-4px"
    >
      {count}
    </Center>
  );
}
