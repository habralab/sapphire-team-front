import { Avatar, Text, Flex, Divider, Box } from '@chakra-ui/react';

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
      <Flex py={4} px={0.5} w="100%" textAlign="center">
        <SGroup count={3} section="Участник" />
        <Box>
          <Divider orientation="vertical" variant="dividerStyle" />
        </Box>
        <SGroup count={1} section="Организатор" />
        <Box>
          <Divider orientation="vertical" variant="dividerStyle" />
        </Box>
        <SGroup count={4.89} section="Рейтинг" />
      </Flex>
    </Flex>
  );
}
