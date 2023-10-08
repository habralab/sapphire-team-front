import { Avatar, Text, Flex } from '@chakra-ui/react';

import { UserInfoList } from './UserInfoList';

export function ProfileCard() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="white"
      w="100%"
      borderRadius="2xl"
      position="relative"
    >
      <Avatar
        name="Татьяна А"
        bg="gray.900"
        color="white"
        border={2}
        borderColor="white"
        w={20}
        h={20}
        fontWeight="semibold"
        fontSize="md"
        position="absolute"
        top={-10}
        boxSizing="content-box"
      />
      <Text align="center" fontWeight="bold" fontSize="2xl" pt={12} mb={4}>
        Татьяна А
      </Text>
      <UserInfoList participantCount={3} organizerCount={1} rating={4.89} />
    </Flex>
  );
}
