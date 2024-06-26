/* eslint-disable @typescript-eslint/no-misused-promises */
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
import React, { useRef, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import { ProjectCard } from '~/widgets/project-card';

import { FilterSpecialization } from '~/features/filter';
import { FilterUser, SearchProject } from '~/features/project';

import { DummyNotFound } from '~/entities/dummy';
import { useFilterStore } from '~/entities/project';
import { useGetSpecs } from '~/entities/storage';
import { Avatar, NotAuthAvatar } from '~/entities/user';

import { useApi, useAuth, useInfinityScroll, useLayoutRefs } from '~/shared/hooks';
import { TIME } from '~/shared/lib/const';
import { PATHS } from '~/shared/lib/router';
import { STag } from '~/shared/ui/STag';

import { useGetAllPositions } from '../api/useGetAllPositions';

export const SearchPage = () => {
  const user = useAuth();
  const { userApi, storageApi } = useApi();
  const targetRef = useRef<HTMLDivElement>(null);
  const layout = useLayoutRefs();

  const [searchText, setSearchText] = useState('');
  const [debounceText] = useDebounce(searchText, TIME.DEBOUNCE);

  const { filter } = useFilterStore();

  const {
    data: positions,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetAllPositions({
    date: filter.date,
    skills: filter.skills,
    specs: filter.specs,
    searchText: debounceText,
  });

  const { data: allSpecs } = useGetSpecs();

  const { data: allSkills } = useQuery({
    queryKey: ['skills'],
    queryFn: () => storageApi.getSkills({ per_page: 2000 }),
    staleTime: Infinity,
  });

  useInfinityScroll({
    hasNextPage,
    targetRef,
    isFetchingNextPage,
    fetchNextPage,
  });

  const handleSumbit = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      <Container maxW="md" mb={4}>
        <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
          <Flex alignItems="center" my={4} h={42}>
            {user.userId ? <Avatar userId={user.userId} /> : <NotAuthAvatar />}

            {user.isAuth && (
              <Flex ml="auto" gap={4} alignItems="baseline">
                {/* <Notification />
                <Settings /> */}
              </Flex>
            )}
          </Flex>
          <Flex gap="1" mb={4}>
            <SearchProject onChange={handleSumbit} placeholder="Найти проект" />
            <FilterUser
              totalItems={positions?.pages[0].total_items}
              isLoading={isLoading}
              userId={user.userId}
              FilterSpec={FilterSpecialization}
            />
          </Flex>
          {isLoading || !positions ? (
            <>
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
              <Skeleton height="200px" borderRadius="2xl" mb={3} />
            </>
          ) : (
            <>
              {!positions.pages[0].total_items ? (
                <DummyNotFound text="Упс, проект не найден" />
              ) : (
                <SimpleGrid gap={4}>
                  {positions.pages.map((group, i) => (
                    <React.Fragment key={i}>
                      {group.data.map((position) => {
                        return (
                          <Link
                            key={position.id}
                            to={generatePath(PATHS.position, { id: position.id })}
                          >
                            <ProjectCard info={position.project}>
                              <STag
                                mainTags={allSpecs
                                  ?.filter(({ id }) => id === position.specialization_id)
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
            </>
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
