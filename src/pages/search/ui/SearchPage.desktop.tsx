import { Flex } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { FilterProject, SearchProject } from '~/features/project';
import { Notification, Settings } from '~/features/user';

import { Avatar } from '~/entities/user';

import { data } from '../data';

export const SearchPageDesktop = () => {
  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex gap="1" mb={4}>
          <SearchProject />
          <FilterProject />
        </Flex>
        {data.map((project) => {
          return <ProjectCard key={project.id} {...project} page="search" />;
        })}
      </Flex>
    </>
  );
};
