import { Flex, Stack } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { AvatarsGroup } from '~/entities/project';

import { data } from '~/shared/lib/data';
import { STag } from '~/shared/ui/STag';

const dummyAvatars = [
  { firstName: 'Alex', lastName: 'Gordon', img: 'https://bit.ly/ryan-florence' },
  { firstName: 'Игорь', lastName: 'Крутой', img: 'https://bit.ly/sage-adebayo' },
  { firstName: 'Джек', lastName: 'Воробей', img: 'https://bit.ly/kent-c-dodds' },
  { firstName: 'Кларк', lastName: 'Кент', img: 'https://bit.ly/prosper-baba' },
  { firstName: 'Джеймс', lastName: 'Бонд', img: 'https://bit.ly/code-beast' },
  { firstName: 'Бернд', lastName: 'Шнайдер', img: 'https://bit.ly/dan-abramov' },
];

export const ProjectsTab = () => {
  return (
    <Stack gap={4}>
      {data.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            status={project.status}
            title={project.title}
            date={project.date}
            description={project.description}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <STag mainTags={['Организатор']} />
              <AvatarsGroup avatars={dummyAvatars} />
            </Flex>
          </ProjectCard>
        );
      })}
    </Stack>
  );
};