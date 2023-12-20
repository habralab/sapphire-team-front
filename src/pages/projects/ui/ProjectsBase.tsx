import { Flex, SimpleGrid, Heading, Container, Box, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';

import { AddProjectButton } from '~/features/project';

import { DummyProject } from '~/entities/dummy';
import { AvatarsGroup, useGetAllProjects } from '~/entities/project';

import { PATHS } from '~/shared/lib/router';
import { STag } from '~/shared/ui/STag';

interface ProjectPageProps {
  userId: string;
}

export const ProjectsBase = ({ userId }: ProjectPageProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

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
          <AddProjectButton />
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
          {!data?.pages.length || !data.pages[0].total_items ? (
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
                          date={project.startline}
                          description={project.description}
                        >
                          <Flex justifyContent="space-between" alignItems="center">
                            <STag
                              mainTags={
                                project.owner_id === userId
                                  ? ['Организатор']
                                  : ['Участник']
                              }
                            />
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
