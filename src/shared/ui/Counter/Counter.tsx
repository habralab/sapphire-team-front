import { Box, ColorProps } from '@chakra-ui/react';

interface CounterType {
  count?: number;
  float?: boolean;
  bg?: ColorProps['color'];
  color?: ColorProps['color'];
}

export function Counter(props: CounterType) {
  const { count, float, bg, color } = props;

  return (
    <Box
      bg={bg ?? 'purple.600'}
      color={color ?? 'white'}
      overflow="hidden"
      textOverflow="ellipsis"
      minW="1em"
      maxW="12"
      whiteSpace="nowrap"
      fontWeight="medium"
      lineHeight="1"
      border="1px"
      borderColor={bg ?? 'purple.600'}
      borderRadius="full"
      boxSizing="content-box"
      right={-1}
      top={-1}
      position={float ? 'absolute' : 'static'}
      textAlign="center"
    >
      {count && count > 99 ? '99+' : count}
    </Box>
  );
}
