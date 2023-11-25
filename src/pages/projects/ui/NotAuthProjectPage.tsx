import { Flex, Heading, Container } from '@chakra-ui/react';

import { AddProject } from '~/features/project';
import { Login } from '~/features/user';

import { DummyProject } from '~/entities/dummy';

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
      <DummyProject />
      <Login />
    </Container>
  );
};
