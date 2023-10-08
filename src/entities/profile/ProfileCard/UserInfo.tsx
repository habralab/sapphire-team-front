import { Box, Text } from '@chakra-ui/react';

import { SText } from '~/shared/ui/SText';

interface UserInfoType {
  count: number;
  section: string;
}

export function UserInfo(props: UserInfoType) {
  const { count, section } = props;

  return (
    <Box px={2} flex="1">
      <Text fontWeight="bold" fontSize="xl">
        {count}
      </Text>
      <SText variant="caption">{section}</SText>
    </Box>
  );
}
