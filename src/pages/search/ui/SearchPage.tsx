import { Flex, SimpleGrid, Container, Button, Portal, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';

import { SearchProject, Filter } from '~/features/project';
import { Notification, Settings } from '~/features/user';

import { Avatar, DummyAvatar } from '~/entities/user';

import { useApi, useLayoutRefs } from '~/shared/hooks';
import { BasePageProps, PATHS } from '~/shared/lib/router';
import {
  loadDataFromStorage,
  loadSkillsFromStorage,
  loadSpecsFromStorage,
} from '~/shared/lib/storageActions';
import { STag } from '~/shared/ui/STag';

import { useGetAllProjects } from '../api/useGetAllProjects';

export const SearchPage = ({ user }: BasePageProps) => {
  const { userApi } = useApi();
  const targetRef = useRef<HTMLDivElement>(null);
  const layout = useLayoutRefs();

  const [userSpecs, setUserSpecs] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [date, setDate] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const localSpecs = loadSpecsFromStorage();
    const localSkills = loadSkillsFromStorage();
    const localData = loadDataFromStorage();
    if (localSpecs.length) setUserSpecs(localSpecs);
    if (localSkills.length) setSelectedItems(localSkills);
    if (localData.length) setDate(localData);
  }, []);

  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useGetAllProjects(
    userSpecs,
    selectedItems,
    date,
    searchText,
  );

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
            <Filter
              userSpecs={userSpecs}
              setUserSpecs={setUserSpecs}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              filterDate={date}
              setFilterDate={setDate}
              totalItems={data?.pages[0].total_items}
            />
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
              {/* <Box ref={targetRef}></Box> */}
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
