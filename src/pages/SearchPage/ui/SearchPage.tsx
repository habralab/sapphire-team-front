import { Container, Flex } from '@chakra-ui/react';

import { data } from '~/pages/SearchPage';

import { ProjectCard } from '~/widgets/projectcard';

export const SearchPage = () => {
  return (
    <Container maxW="container.sm">
      <Flex
        alignContent={'center'}
        gap={4}
        flexDirection="column"
        justifyContent="space-between"
      >
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} type="all" />
        ))}
      </Flex>
    </Container>
  );
};
