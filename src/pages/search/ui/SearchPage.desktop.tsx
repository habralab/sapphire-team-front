import { Flex, SimpleGrid } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { SearchProject, FilterProject } from '~/features/project';

import { data } from '../data';

export const SearchPageDesktop = () => {
  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex gap="4" mb={4}>
          <SearchProject />
          <FilterProject />
        </Flex>
        <SimpleGrid columns={2} gap={6}>
          {data.map((project) => {
            return <ProjectCard key={project.id} {...project} page="search" />;
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};
