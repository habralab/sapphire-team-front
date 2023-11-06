/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  Flex,
  SimpleGrid,
  Container,
  Button,
  Portal,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';

import { ProjectCard } from '~/widgets/project-card';

import { SearchProject, Filter } from '~/features/project';
import { Notification, Settings } from '~/features/user';

import { Avatar } from '~/entities/user';

import { useApi, useIsAuth, useLayoutRefs } from '~/shared/hooks';
import { STag } from '~/shared/ui/STag';

export const SearchPage = () => {
  const { userApi, projectsApi } = useApi();
  const targetRef = useRef(null);
  const layout = useLayoutRefs();
  const isAuth = useIsAuth();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getAllProjects'],
    queryFn: ({ pageParam = 1 }) => projectsApi.getAllProjects(pageParam),
    getNextPageParam: (lastPage) => lastPage.page + 1,
    staleTime: 5000,
  });

  const dummyDate = {
    mainTags: ['Фронтенд разработчик'],
    tags: ['TypeScript', 'Vue', 'Webpack'],
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    }, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [data]);

  return (
    <>
      <Container maxW="md" mb={4}>
        <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
          <Flex alignItems="center" my={4} h={42}>
            <Avatar />
            {isAuth && (
              <Flex ml="auto" gap={4} alignItems="baseline">
                <Notification />
                <Settings />
              </Flex>
            )}
          </Flex>
          <Flex gap="1" mb={4}>
            <SearchProject />
            <Filter />
          </Flex>
          {isLoading || !data ? (
            <>
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
            </>
          ) : (
            <SimpleGrid gap={4}>
              {data?.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.data.map((project) => {
                    return (
                      <ProjectCard
                        key={project.id}
                        status={project.status}
                        title={project.name}
                        date={project.deadline}
                        description={project.description}
                      >
                        <STag mainTags={dummyDate.mainTags} tags={dummyDate.tags} />
                      </ProjectCard>
                    );
                  })}
                </React.Fragment>
              ))}
              <Box ref={targetRef}></Box>
            </SimpleGrid>
          )}
        </Flex>
      </Container>
      {layout?.footer && !isAuth && (
        <Portal containerRef={layout.footer}>
          <Container py={2} maxW="md">
            <Button w="full" as="a" href={userApi.authURL}>
              Зарегистрироваться
            </Button>
          </Container>
        </Portal>
      )}
    </>
  );
};
