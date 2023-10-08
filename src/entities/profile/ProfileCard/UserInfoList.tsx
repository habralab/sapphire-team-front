import { Flex, Text, Box, Divider } from '@chakra-ui/react';

import { UserInfo } from './UserInfo';

interface UserInfoType {
  participantCount: number;
  organizerCount: number;
  rating: number;
}

export function UserInfoList(props: UserInfoType) {
  const { participantCount, organizerCount, rating } = props;

  return (
    <Flex py={4} px={0.5} w="100%" textAlign="center">
      <UserInfo count={participantCount} section="Участник" />
      <Box>
        <Divider orientation="vertical" variant="dividerStyle" />
      </Box>
      <UserInfo count={organizerCount} section="Организатор" />
      <Box>
        <Divider orientation="vertical" variant="dividerStyle" />
      </Box>
      <UserInfo count={rating} section="Рейтинг" />
    </Flex>
  );
}
