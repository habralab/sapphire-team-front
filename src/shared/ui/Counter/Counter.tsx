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
      w={4}
      h={4}
      fontSize="xs"
      fontWeight="medium"
      border="1px"
      borderColor="inherit"
      borderRadius="full"
      right={-1}
      top={-1}
    >
      {count}
    </Center>
  );
}
