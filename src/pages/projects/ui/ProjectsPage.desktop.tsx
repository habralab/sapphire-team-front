import { Flex, SimpleGrid, Heading } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { AddProjectButton } from '~/features/project';

import { AvatarsGroup } from '~/entities/project';

import { STag } from '~/shared/ui/STag';

export const ProjectsPageDesktop = () => {
  const dummyAvatars = [
    { firstName: 'Alex', lastName: 'Gordon', img: 'https://bit.ly/ryan-florence' },
    { firstName: 'Игорь', lastName: 'Крутой', img: 'https://bit.ly/sage-adebayo' },
    { firstName: 'Джек', lastName: 'Воробей', img: 'https://bit.ly/kent-c-dodds' },
    { firstName: 'Кларк', lastName: 'Кент', img: 'https://bit.ly/prosper-baba' },
    { firstName: 'Джеймс', lastName: 'Бонд', img: 'https://bit.ly/code-beast' },
    { firstName: 'Бернд', lastName: 'Шнайдер', img: 'https://bit.ly/dan-abramov' },
  ];
  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Heading variant="h1" as="h1">
            Проекты
          </Heading>
          <Flex gap={4} alignItems="baseline">
            <AddProjectButton />
          </Flex>
        </Flex>
        <SimpleGrid
          columns={{
            lg: 2,
          }}
          gap={6}
        >
          {/* {data.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                status={'finished'}
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
          })} */}
        </SimpleGrid>
      </Flex>
    </>
  );
};
