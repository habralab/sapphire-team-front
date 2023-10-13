import { Box, Text } from '@chakra-ui/react';

import { SText } from '~/shared/ui/SText';

interface SGroupProps {
  count: number;
  section: string;
}

export function SGroup(props: SGroupProps) {
  const { count, section } = props;

  return (
    <Box px={2} flex="1">
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        {count}
      </Text>
      <SText variant="caption" mb={0}>
        {section}
      </SText>
    </Box>
  );
}
