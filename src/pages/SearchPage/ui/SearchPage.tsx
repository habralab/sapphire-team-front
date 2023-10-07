import { Container, Flex } from '@chakra-ui/react';

import { ProjectCard, dataAdapter } from '~/widgets/project-card';

import { FilterProject, SearchProject } from '~/features/projects';

import { data } from '../data';

export const SearchPage = () => {
  return (
    <Container variant="mobile">
      <Flex
        alignContent="center"
        gap="4"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex gap="1">
          <SearchProject />
          <FilterProject />
        </Flex>
        {data.map((project) => {
          const adaptiveProjectData = dataAdapter(project, 'search');
          return <ProjectCard key={adaptiveProjectData.id} {...adaptiveProjectData} />;
        })}
      </Flex>
    </Container>
  );
};
