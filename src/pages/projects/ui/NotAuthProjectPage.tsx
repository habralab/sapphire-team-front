import { Flex, Heading, Container, Image, Text } from '@chakra-ui/react';

import { AddProject } from '~/features/project';
import { Login } from '~/features/user';

import NotAuth from './NotAuth.svg';

export const NotAuthProjectsPage = () => {
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
        mt={4}
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
      <Login />
    </Container>
  );
};
