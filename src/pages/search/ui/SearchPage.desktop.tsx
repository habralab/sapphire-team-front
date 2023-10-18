import { Flex, SimpleGrid } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { SearchProject, FilterProject } from '~/features/project';

import { data } from '~/shared/lib/data';
import { STag } from '~/shared/ui/STag';

export const SearchPageDesktop = () => {
  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex gap="4" mb={4}>
          <SearchProject />
          <FilterProject />
        </Flex>
        <SimpleGrid
          columns={{
            lg: 2,
          }}
          gap={6}
        >
          {data.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                status={project.status}
                title={project.title}
                date={project.date}
                description={project.description}
              >
                <STag mainTags={project.mainTags} tags={project.tags} />
              </ProjectCard>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};
