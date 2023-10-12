import { Flex, SimpleGrid } from '@chakra-ui/react';

import { ProjectCardDesktop } from '~/widgets/project-card';

import { FilterProjectDesktop, SearchProject } from '~/features/project';

import { data } from '../data';

export const SearchPageDesktop = () => {
  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex gap="4" mb={4}>
          <SearchProject />
          <FilterProjectDesktop />
        </Flex>
        <SimpleGrid columns={2} gap={6}>
          {data.map((project) => {
            return <ProjectCardDesktop key={project.id} {...project} page="search" />;
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};
