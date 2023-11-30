import { Box, Flex, Skeleton, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';

import { useGetAllProjects } from '~/entities/project';

import { PATHS } from '~/shared/lib/router';
import { STag } from '~/shared/ui/STag';

interface ProjectsTabProps {
  userId: string;
}

export const ProjectsTab = ({ userId }: ProjectsTabProps) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useGetAllProjects(userId);
  const targetRef = useRef<HTMLDivElement>(null);

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
    <>
      {isLoading ? (
        <>
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
        </>
      ) : (
        <Stack gap={4}>
          {!data?.pages.length || !data.pages[0].total_items ? (
            <Text textAlign="center" color="gray.700">
              Нет проектов
            </Text>
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
                                userId === project.owner_id
                                  ? ['Организатор']
                                  : ['Участник']
                              }
                            />
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
        </Stack>
      )}
    </>
  );
};
