import { Heading, Flex, Container, Box, Image, Text } from '@chakra-ui/react';

import { Login } from '~/features/user';

import { SearchInput } from '~/shared/ui/SearchInput';

import NotAuth from './NotAuth.svg';

export function NotAuthChatsPage() {
  return (
    <Box w="full">
      <Box bg="bg">
        <Container maxW="md" py={4}>
          <Flex justifyContent="space-between" alignItems="center" h={42} mb={2}>
            <Heading variant="h1" as="h1">
              Чаты
            </Heading>
          </Flex>
          <SearchInput placeholder="Найти в чатах" onChange={console.log} />
          <Flex
            bg="white"
            borderRadius="2xl"
            p={5}
            mt={4}
            direction="column"
            alignItems="center"
            gap={5}
          >
            <Image src={NotAuth} />
            <Text fontSize="md" fontWeight="medium" mt={1}>
              Нет сообщений
            </Text>
            <Text color="gray.700" textAlign="center">
              Здесь будут отображаться диалоги c Вашими тиммейтами
            </Text>
          </Flex>
          <Login />
        </Container>
      </Box>
    </Box>
  );
}
