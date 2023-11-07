/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  Flex,
  SimpleGrid,
  Heading,
  Container,
  Box,
  Skeleton,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import { Link, generatePath, useNavigate } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';

import { AddProject } from '~/features/project';

import { AvatarsGroup } from '~/entities/project';

import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { STag } from '~/shared/ui/STag';

import NotAuth from './NotAuth.svg';

export const ProjectsPage = () => {
  const targetRef = useRef(null);
  const { projectsApi, userApi } = useApi();
  const navigate = useNavigate();
  const dummyAvatars = [
    { firstName: 'Alex', lastName: 'Gordon', img: 'https://bit.ly/ryan-florence' },
    { firstName: 'Игорь', lastName: 'Крутой', img: 'https://bit.ly/sage-adebayo' },
    { firstName: 'Джек', lastName: 'Воробей', img: 'https://bit.ly/kent-c-dodds' },
    { firstName: 'Кларк', lastName: 'Кент', img: 'https://bit.ly/prosper-baba' },
    { firstName: 'Джеймс', lastName: 'Бонд', img: 'https://bit.ly/code-beast' },
    { firstName: 'Бернд', lastName: 'Шнайдер', img: 'https://bit.ly/dan-abramov' },
  ];

  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['getAllProjects'],
    queryFn: ({ pageParam = 1 }) => projectsApi.getAllProjects(pageParam),
    // getNextPageParam: (lastPage) => lastPage.page + 1,
    staleTime: 5000,
  });

  const { data: myData, isLoading: meIsLoading } = useQuery({
    queryKey: ['myID'],
    queryFn: () => userApi.getMe(),
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
        fetchNextPage();
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

      {isLoading || meIsLoading || !data ? (
        <>
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
          <Skeleton height="200px" borderRadius="2xl" mb={3} />
        </>
      ) : (
        <SimpleGrid gap={4}>
          {data.pages.map((group, i) => {
            const filteredProject = group.data.filter(
              ({ owner_id }) => owner_id === myData?.id,
            );
            return (
              <>
                {filteredProject.length === 0 ? (
                  <Flex
                    bg="white"
                    my={6}
                    borderRadius="2xl"
                    p={5}
                    direction="column"
                    alignItems="center"
                    gap={5}
                  >
                    <Image src={NotAuth} />
                    <Text fontSize="md" fontWeight="medium" mt={1}>
                      Нет проектов
                    </Text>
                    <Text color="gray.700" textAlign="center">
                      Здесь будут отображаться все ваши проекты в качестве участника и
                      организатора
                    </Text>
                    <Button
                      type="button"
                      onClick={() => {
                        navigate(PATHS.addProject);
                      }}
                      fontSize="sm"
                      fontWeight="600"
                      w="full"
                    >
                      Создать свой проект
                    </Button>
                  </Flex>
                ) : (
                  <React.Fragment key={i}>
                    {filteredProject.map((project) => {
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
                              <AvatarsGroup avatars={dummyAvatars} />
                            </Flex>
                          </ProjectCard>
                        </Link>
                      );
                    })}
                  </React.Fragment>
                )}
              </>
            );
          })}
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
    </Container>
  );
};
