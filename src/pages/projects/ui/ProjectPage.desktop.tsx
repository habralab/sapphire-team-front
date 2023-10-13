import { Flex } from '@chakra-ui/react';

import { data } from '~/pages/data';

import { ProjectCard } from '~/widgets/project-card';

import { AddProject } from '~/features/project';

import { AvatarsGroup } from '~/entities/project';

import { STag } from '~/shared/ui/STag';
import { SText } from '~/shared/ui/SText';

export const ProjectPageDesktop = () => {
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
          <SText variant="h1">Проекты</SText>
          <Flex gap={4} alignItems="baseline">
            <AddProject />
          </Flex>
        </Flex>
        {data.map((project) => {
          return (
            <ProjectCard key={project.id} {...project}>
              <Flex justifyContent="space-between" alignItems="center">
                <STag mainTags={['Организатор']} />
                <AvatarsGroup avatars={dummyAvatars} />
              </Flex>
            </ProjectCard>
          );
        })}
      </Flex>
    </>
  );
};
