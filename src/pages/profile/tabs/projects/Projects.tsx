import { Flex, Stack, Text } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { AvatarsGroup } from '~/entities/project';
import { useGetUserProject } from '~/entities/user';

import { STag } from '~/shared/ui/STag';

const dummyAvatars = [
  { firstName: 'Alex', lastName: 'Gordon', img: 'https://bit.ly/ryan-florence' },
  { firstName: 'Игорь', lastName: 'Крутой', img: 'https://bit.ly/sage-adebayo' },
  { firstName: 'Джек', lastName: 'Воробей', img: 'https://bit.ly/kent-c-dodds' },
  { firstName: 'Кларк', lastName: 'Кент', img: 'https://bit.ly/prosper-baba' },
  { firstName: 'Джеймс', lastName: 'Бонд', img: 'https://bit.ly/code-beast' },
  { firstName: 'Бернд', lastName: 'Шнайдер', img: 'https://bit.ly/dan-abramov' },
];

interface ProjectsTabProps {
  userId: string;
}

export const ProjectsTab = ({ userId }: ProjectsTabProps) => {
  const { data: projects } = useGetUserProject(userId);

  return (
    <Stack gap={4}>
      {projects?.data.length ? (
        projects.data.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              status={project.status}
              title={project.name}
              date={project.startline}
              description={project.description}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <STag mainTags={['Организатор']} />
                <AvatarsGroup avatars={dummyAvatars} />
              </Flex>
            </ProjectCard>
          );
        })
      ) : (
        <Text textAlign="center" color="gray.700">
          Нет проектов
        </Text>
      )}
    </Stack>
  );
};
