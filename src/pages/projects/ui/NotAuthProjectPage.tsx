import { Flex, Heading, Container, Image, Button, Text, Portal } from '@chakra-ui/react';

import { AddProject } from '~/features/project';

import { useApi, useLayoutRefs } from '~/shared/hooks';

import NotAuth from './NotAuth.svg';

export const NotAuthProjectsPage = () => {
  const { userApi } = useApi();
  const layout = useLayoutRefs();

  return (
    <Container maxW="md" mb={4}>
      <Flex justifyContent="space-between" alignItems="center" my={4} h={42}>
        <Heading variant="h1" as="h1">
          Проекты
        </Heading>
        <Flex gap={4} alignItems="baseline">
          <AddProject />
        </Flex>
      </Flex>
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
          Нет проектов
        </Text>
        <Text color="gray.700" textAlign="center">
          Здесь будут отображаться все ваши проекты в качестве участника и организатора
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
  );
};
