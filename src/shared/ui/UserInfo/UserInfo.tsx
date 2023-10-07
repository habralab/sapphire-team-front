import { Flex, Text, Box, Divider } from '@chakra-ui/react';

interface UserInfoType {
  participantCount: number;
  organizerCount: number;
  rating: number;
}

export function UserInfo(props: UserInfoType) {
  const { participantCount, organizerCount, rating } = props;

  return (
    <Flex py={4} px={0.5} w="100%" textAlign="center">
      <Box pr={2} flex="1">
        <Text fontWeight="bold" fontSize="xl">
          {participantCount}
        </Text>
        <Text color="gray.600">Участник</Text>
      </Box>
      <Box>
        <Divider orientation="vertical" variant="dividerStyle" />
      </Box>
      <Box px={2} flex="1">
        <Text fontWeight="bold" fontSize="xl">
          {organizerCount}
        </Text>
        <Text color="gray.600">Организатор</Text>
      </Box>
      <Box>
        <Divider orientation="vertical" variant="dividerStyle" />
      </Box>
      <Divider orientation="vertical" variant="dividerStyle" />
      <Box pl={2} flex="1">
        <Text fontWeight="bold" fontSize="xl">
          {rating}
        </Text>
        <Text color="gray.600">Рейтинг</Text>
      </Box>
    </Flex>
  );
}
