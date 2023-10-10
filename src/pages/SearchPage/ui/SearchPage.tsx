import { Flex } from '@chakra-ui/react';

import { ProjectCard, dataAdapter } from '~/widgets/project-card';

import { Avatar } from '~/features/avatar';
import { Notification } from '~/features/notofication';
import { FilterProject, SearchProject } from '~/features/project';
import { Setting } from '~/features/setting';

import { data } from '../data';

export const SearchPage = () => {
  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex alignItems="center" justifyContent="space-between" mb="1.5rem">
          <Avatar firstName="Татьяна" lastName="Антонова" />
          <Flex gap={4}>
            <Notification />
            <Setting />
          </Flex>
        </Flex>
        <Flex gap="1" mb="1rem">
          <SearchProject />
          <FilterProject />
        </Flex>
        {data.map((project) => {
          const adaptiveProjectData = dataAdapter(project, 'search');
          return <ProjectCard key={adaptiveProjectData.id} {...adaptiveProjectData} />;
        })}
      </Flex>
    </>
  );
};
