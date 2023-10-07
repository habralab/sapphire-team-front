import { Avatar, Text, Flex } from '@chakra-ui/react';

import { UserInfo } from '~/shared/ui/UserInfo';

export function ProfileCard() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="white"
      w="100%"
      mt={16}
      borderRadius="2xl"
      position="relative"
    >
      <Avatar
        name="Татьяна А"
        bg="gray.900"
        color="white"
        border="8px"
        borderColor="white"
        w="80px"
        h="80px"
        fontWeight="semibold"
        fontSize="md"
        position="absolute"
        top="-40px"
        boxSizing="content-box"
      />
      <Text align="center" fontWeight="bold" fontSize="2xl" mt={12} py={4}>
        Татьяна А
      </Text>
      <UserInfo participantCount={3} organizerCount={1} rating={4.89} />
    </Flex>
  );
}
