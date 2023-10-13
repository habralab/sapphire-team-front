import { Box } from '@chakra-ui/react';

interface CounterType {
  count?: number;
  float?: boolean;
}

export function Counter(props: CounterType) {
  const { count, float } = props;

  return (
    <Box
      bg="purple.600"
      color="white"
      overflow="hidden"
      textOverflow="ellipsis"
      minW="1em"
      maxW="12"
      whiteSpace="nowrap"
      fontSize={['xs', 'xs', 'sm']}
      fontWeight="medium"
      lineHeight="1"
      borderColor="inherit"
      borderRadius="full"
      boxShadow="0 0 0 3px var(--chakra-colors-purple-600)"
      right={-1}
      top={-1}
      position={float ? 'absolute' : 'static'}
      textAlign="center"
    >
      {count}
    </Box>
  );
}
