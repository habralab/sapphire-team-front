import { Container, Flex } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { FilterProject, SearchProject } from '~/features/projects';

import { data } from '../data';

export const SearchPage = () => {
  return (
    <Container variant="mobile">
      <Flex
        alignContent={'center'}
        gap={4}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex>
          <SearchProject />
          <FilterProject />
        </Flex>
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} type="all" />
        ))}
      </Flex>
    </Container>
  );
};
