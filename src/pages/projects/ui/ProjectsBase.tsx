import { Flex, SimpleGrid, Heading, Container, Box, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';

import { AddProject } from '~/features/project';

import { DummyProject } from '~/entities/dummy';
import { AvatarsGroup } from '~/entities/project';

import { PATHS } from '~/shared/lib/router';
import { STag } from '~/shared/ui/STag';

import { useGetAllProjects } from '../api/useGetAllProjects';

interface ProjectPageProps {
  userId: string;
}

export const ProjectsBase = ({ userId }: ProjectPageProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const dummyAvatars = [
    { firstName: 'Alex', lastName: 'Gordon', img: 'https://bit.ly/ryan-florence' },
    { firstName: 'Игорь', lastName: 'Крутой', img: 'https://bit.ly/sage-adebayo' },
    { firstName: 'Джек', lastName: 'Воробей', img: 'https://bit.ly/kent-c-dodds' },
    { firstName: 'Кларк', lastName: 'Кент', img: 'https://bit.ly/prosper-baba' },
    { firstName: 'Джеймс', lastName: 'Бонд', img: 'https://bit.ly/code-beast' },
    { firstName: 'Бернд', lastName: 'Шнайдер', img: 'https://bit.ly/dan-abramov' },
  ];

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetAllProjects(userId);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (hasNextPage) fetchNextPage();
      }
    }, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [data]);

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

      {isLoading ? (
        <>
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
        </>
      ) : (
        <SimpleGrid gap={4}>
          {!data?.pages.length ? (
            <DummyProject />
          ) : (
            <>
              {data.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.data.map((project) => {
                    return (
                      <Link
                        key={project.id}
                        to={generatePath(PATHS.project, { id: project.id })}
                      >
                        <ProjectCard
                          status={project.status}
                          title={project.name}
                          date={project.deadline}
                          description={project.description}
                        >
                          <Flex justifyContent="space-between" alignItems="center">
                            <STag mainTags={['Организатор']} />
                            {/* <AvatarsGroup avatars={dummyAvatars} /> */}
                          </Flex>
                        </ProjectCard>
                      </Link>
                    );
                  })}
                </React.Fragment>
              ))}
            </>
          )}
          {isFetchingNextPage ? (
            <>
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
            </>
          ) : (
            <Box ref={targetRef} />
          )}
        </SimpleGrid>
      )}
    </Container>
  );
};
