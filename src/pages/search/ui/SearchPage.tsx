import { Flex, SimpleGrid, Container } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { FilterProject, SearchProject } from '~/features/project';
import { Notification, Settings } from '~/features/user';

import { Avatar } from '~/entities/user';

import { data } from '~/shared/lib/data';
import { STag } from '~/shared/ui/STag';

export const SearchPage = () => {
  return (
    <Container maxW="md" mb={4}>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex justifyContent="space-between" alignItems="center" my={4}>
          <Avatar firstName="Татьяна" lastName="Антонова" />
          <Flex gap={4} alignItems="baseline">
            <Notification />
            <Settings />
          </Flex>
        </Flex>
        <Flex gap="1" mb={4}>
          <SearchProject />
          <FilterProject />
        </Flex>
        <SimpleGrid gap={4}>
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
    </Container>
  );
};
