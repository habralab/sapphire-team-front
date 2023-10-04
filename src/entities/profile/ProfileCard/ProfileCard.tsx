import { Avatar, Text, Flex, Box, Divider } from '@chakra-ui/react';

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
      />
      <Text align="center" fontWeight="bold" fontSize="2xl" mt={10} py={4}>
        Татьяна А
      </Text>
      <Flex py={4} px={0.5} w="100%">
        <Box pr={2} flex="1">
          <Text fontWeight="bold" fontSize="xl" align="center">
            3
          </Text>
          <Text fontSize="xs" color="gray.600" align="center">
            Участник
          </Text>
        </Box>
        <Box>
          <Divider orientation="vertical" variant="dividerStyle" />
        </Box>
        <Box px={2} flex="1">
          <Text fontWeight="bold" fontSize="xl" align="center">
            1
          </Text>
          <Text fontSize="xs" color="gray.600" align="center">
            Организатор
          </Text>
        </Box>
        <Box>
          <Divider orientation="vertical" variant="dividerStyle" />
        </Box>
        <Divider orientation="vertical" variant="dividerStyle" />
        <Box pl={2} flex="1">
          <Text fontWeight="bold" fontSize="xl" align="center">
            4.89
          </Text>
          <Text fontSize="xs" color="gray.600" align="center">
            Рейтинг
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
