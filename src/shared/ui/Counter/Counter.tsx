import { Box, ColorProps } from '@chakra-ui/react';

interface CounterType {
  count?: number;
  float?: boolean;
  bg?: ColorProps['color'];
  color?: ColorProps['color'];
  borderBg?: ColorProps['color'];
  noBorder?: boolean;
}

export function Counter(props: CounterType) {
  const { count, float, bg, color, borderBg, noBorder } = props;

  return (
    <Box
      display={count ? 'block' : 'none'}
      bg={bg ?? 'purple.600'}
      color={color ?? 'white'}
      overflow="hidden"
      textOverflow="ellipsis"
      minW="1em"
      maxW="12"
      height="1em"
      whiteSpace="nowrap"
      fontWeight="normal"
      lineHeight="1"
      border={noBorder ? '' : '2px'}
      fontSize="sm"
      borderColor={borderBg ?? bg ?? 'purple.600'}
      borderRadius="full"
      boxSizing="content-box"
      right={count && count > 99 ? -3 : -1}
      top={-1}
      position={float ? 'absolute' : 'static'}
      textAlign="center"
    >
      {count && count > 99 ? '99+' : count}
    </Box>
  );
}
