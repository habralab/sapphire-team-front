import { Flex, SimpleGrid, Heading, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';

import { ProjectCard } from '~/widgets/project-card';

import { Filter, SearchProject } from '~/features/project';

import { data } from '~/shared/lib/data';
import { STag } from '~/shared/ui/STag';

export const SearchPageDesktop = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios.get(
      `https://stage.sapphire.pet-project.habr.com/backend/users/api/rest/users/c396f668-63c6-41e4-8af6-1d3275f6e14c`,
    );
  }, []);
  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading variant="h1" as="h1">
            Поиск
          </Heading>
        </Flex>
        <Button
          as={'a'}
          href={`https://stage.sapphire.pet-project.habr.com/backend/users/api/rest/auth/oauth2/habr/authorize?redirect_url=${window.location.origin}`}
        >
          Авторизоваться
        </Button>
        <Flex gap="4" mb={4}>
          <SearchProject />
          <Filter />
        </Flex>
        <SimpleGrid
          columns={{
            lg: 2,
          }}
          gap={6}
        >
          {data.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                status={project.status}
                title={project.title}
                date={project.date}
                description={project.description}
              >
                <STag mainTags={project.mainTags} tags={project.tags} />
              </ProjectCard>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};
