import { Flex, SimpleGrid, Heading, Container } from '@chakra-ui/react';
import { Link, generatePath } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';

import { AddProject } from '~/features/project';

import { AvatarsGroup } from '~/entities/project';

import { data } from '~/shared/lib/data';
import { PATHS } from '~/shared/lib/router';
import { STag } from '~/shared/ui/STag';

export const ProjectsPage = () => {
  const dummyAvatars = [
    { firstName: 'Alex', lastName: 'Gordon', img: 'https://bit.ly/ryan-florence' },
    { firstName: 'Игорь', lastName: 'Крутой', img: 'https://bit.ly/sage-adebayo' },
    { firstName: 'Джек', lastName: 'Воробей', img: 'https://bit.ly/kent-c-dodds' },
    { firstName: 'Кларк', lastName: 'Кент', img: 'https://bit.ly/prosper-baba' },
    { firstName: 'Джеймс', lastName: 'Бонд', img: 'https://bit.ly/code-beast' },
    { firstName: 'Бернд', lastName: 'Шнайдер', img: 'https://bit.ly/dan-abramov' },
  ];
  return (
    <Container maxW="md" mb={4}>
      <Flex justifyContent="space-between" alignItems="center" my={4} h={42}>
        <Heading variant="h1" as="h1">
          Проекты
        </Heading>
        <Flex gap={4} alignItems="baseline">
          <AddProject />
        </Flex>
      </Flex>

      <SimpleGrid gap={4}>
        {data.map((project) => {
          return (
            <Link key={project.id} to={generatePath(PATHS.project, { id: project.id })}>
              <ProjectCard
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
            </Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};
