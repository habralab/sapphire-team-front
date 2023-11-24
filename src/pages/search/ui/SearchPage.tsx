import {
  Flex,
  SimpleGrid,
  Container,
  Button,
  Portal,
  Skeleton,
  Box,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';

import { SearchProject } from '~/features/project';
import { Notification, Settings } from '~/features/user';

import { Filter, useFilterStore } from '~/entities/project';
import { useGetSpecs } from '~/entities/storage';
import { Avatar, DummyAvatar } from '~/entities/user';

import { useApi, useLayoutRefs } from '~/shared/hooks';
import { BasePageProps, PATHS } from '~/shared/lib/router';
import { STag } from '~/shared/ui/STag';

import { useGetAllPositions } from '../api/useGetAllPositions';

export const SearchPage = ({ user }: BasePageProps) => {
  const { userApi, storageApi } = useApi();
  const targetRef = useRef<HTMLDivElement>(null);
  const layout = useLayoutRefs();

  const [searchText, setSearchText] = useState('');

  const { filter } = useFilterStore();

  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useGetAllPositions({
    date: filter.date,
    skills: filter.skills,
    specs: filter.specs,
    searchText,
  });

  const { data: allSpecs } = useGetSpecs();

  const { data: allSkills } = useQuery({
    queryKey: ['skills'],
    queryFn: () => storageApi.getSkills(),
    staleTime: Infinity,
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (data?.pages[0].total_pages) {
          if (data.pages.length < data.pages[0].total_pages) {
            fetchNextPage();
          }
        }
      }
    }, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [data]);

  const handleSumbit = (value: string) => {
    setSearchText(value);
  };

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
            <SearchProject onChange={handleSumbit} />
            <Filter totalItems={data?.pages[0].total_items} />
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
                  {group.data.map((position) => {
                    return (
                      <Link
                        key={position.id}
                        to={generatePath(PATHS.position, { id: position.id })}
                      >
                        <ProjectCard
                          status={position.project.status}
                          title={position.project.name}
                          date={position.project.startline}
                          description={position.project.description}
                        >
                          <STag
                            mainTags={allSpecs?.data
                              .filter(({ id }) => id === position.specialization_id)
                              .map(({ name }) => (name ? name : ''))}
                            tags={allSkills
                              ?.filter(({ value }) => position.skills.includes(value))
                              .map(({ label }) => label)}
                          />
                        </ProjectCard>
                      </Link>
                    );
                  })}
                </React.Fragment>
              ))}
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
