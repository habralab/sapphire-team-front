import { Flex } from '@chakra-ui/react';

import { data } from '~/pages/data';

import { ProjectCard } from '~/widgets/project-card';

import { AddProject } from '~/features/project';

import { SText } from '~/shared/ui/SText';

export const ProjectPage = () => {
  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <SText variant="h1">Проекты</SText>
          <Flex gap={4} alignItems="baseline">
            <AddProject />
          </Flex>
        </Flex>
        {data.map((project) => {
          return <ProjectCard key={project.id} {...project} page="project" />;
        })}
      </Flex>
    </>
  );
};
