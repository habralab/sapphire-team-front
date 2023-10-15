import { Box, Text } from '@chakra-ui/react';

interface SGroupProps {
  count: number;
  section: string;
}

export function SGroup(props: SGroupProps) {
  const { count, section } = props;

  return (
    <Box px={0} flex="1">
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        {count}
      </Text>
      <Text variant="caption">{section}</Text>
    </Box>
  );
}
