import { Avatar, Text, Flex, Divider, Box } from '@chakra-ui/react';

import { Info } from '~/entities/user';

import { SGroup } from '~/shared/ui/SGroup';

export function ProfileCard() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="white"
      w="100%"
      borderRadius="2xl"
      position="relative"
      mb={4}
    >
      <Avatar
        name="Татьяна А"
        variant="profileAvatar"
        border="0.5rem solid white"
        position="absolute"
        top={-10}
        boxSizing="content-box"
      />
      <Text align="center" fontWeight="bold" fontSize="2xl" pt={16} mb={4}>
        Татьяна А
      </Text>
      <Info />
    </Flex>
  );
}
