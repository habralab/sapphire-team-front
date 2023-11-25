import { Flex, Heading, Container, Image, Text } from '@chakra-ui/react';

import { AddProject } from '~/features/project';
import { Login } from '~/features/user';

import { DummyPage } from '~/shared/ui/DummyPage';

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
      <DummyPage heading="Нет проектов" variant="project">
        Здесь будут отображаться все ваши проекты в качестве участника и организатора
      </DummyPage>
      <Login />
    </Container>
  );
};
