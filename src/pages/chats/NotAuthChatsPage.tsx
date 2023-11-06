import {
  Heading,
  Flex,
  Container,
  Box,
  Image,
  Text,
  Portal,
  Button,
} from '@chakra-ui/react';

import { useApi, useLayoutRefs } from '~/shared/hooks';
import { SearchInput } from '~/shared/ui/SearchInput';

import NotAuth from './NotAuth.svg';

export function NotAuthChatsPage() {
  const { userApi } = useApi();
  const layout = useLayoutRefs();

  return (
    <Box w="full">
      <Box bg="bg">
        <Container maxW="md" py={4} pb={8}>
          <Flex justifyContent="space-between" alignItems="center" h={42} mb={2}>
            <Heading variant="h1" as="h1">
              Чаты
            </Heading>
          </Flex>
          <SearchInput placeholder="Найти в чатах" onChange={console.log} />
          <Flex
            bg="white"
            my={6}
            borderRadius="2xl"
            p={5}
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
          {layout?.footer && (
            <Portal containerRef={layout.footer}>
              <Container py={2} maxW="md">
                <Button w="full" as="a" href={userApi.authURL}>
                  Зарегистрироваться
                </Button>
              </Container>
            </Portal>
          )}
        </Container>
      </Box>
    </Box>
  );
}
