import {
  Flex,
  SimpleGrid,
  Container,
  Button,
  Portal,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import { QueryFunctionContext, QueryKey, useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';

import { SearchProject, Filter } from '~/features/project';
import { Notification, Settings } from '~/features/user';

import { Avatar, DummyAvatar } from '~/entities/user';

import { useApi, useLayoutRefs } from '~/shared/hooks';
import { BasePageProps, PATHS } from '~/shared/lib/router';
import { STag } from '~/shared/ui/STag';

export const SearchPage = ({ user }: BasePageProps) => {
  const { userApi, projectsApi } = useApi();
  const targetRef = useRef<HTMLDivElement>(null);
  const layout = useLayoutRefs();

  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['getAllProjects'],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext<QueryKey, number>) =>
      projectsApi.getAllProjects(pageParam),
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
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
            {user.userId ? <Avatar userId={user.userId} /> : <DummyAvatar />}

            {user.isAuth && (
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
              {data.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.data.map((project) => {
                    return (
                      <Link
                        key={project.id}
                        to={generatePath(PATHS.searchProject, { id: project.id })}
                      >
                        <ProjectCard
                          status={project.status}
                          title={project.name}
                          date={project.deadline}
                          description={project.description}
                        >
                          <STag mainTags={dummyDate.mainTags} tags={dummyDate.tags} />
                        </ProjectCard>
                      </Link>
                    );
                  })}
                </React.Fragment>
              ))}
              {isFetchingNextPage && (
                <>
                  <Skeleton height="200px" borderRadius="2xl" mb={3} />
                  <Skeleton height="200px" borderRadius="2xl" mb={3} />
                  <Skeleton height="200px" borderRadius="2xl" mb={3} />
                </>
              )}
              <Box ref={targetRef}></Box>
            </SimpleGrid>
          )}
        </Flex>
      </Container>
      {layout?.footer && !user.isAuth && (
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
