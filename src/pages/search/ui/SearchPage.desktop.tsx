import { Flex, SimpleGrid, Heading } from '@chakra-ui/react';
import { useState } from 'react';

import { ProjectCard } from '~/widgets/project-card';

import { SearchProject } from '~/features/project';

import { Filter } from '~/entities/project';

import { data } from '~/shared/lib/data';
import { STag } from '~/shared/ui/STag';

export const SearchPageDesktop = () => {
  const [searchText, setSearchText] = useState('');

  const handleSumbit = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading variant="h1" as="h1">
            Поиск
          </Heading>
        </Flex>
        <Flex gap="4" mb={4}>
          <SearchProject onChange={handleSumbit} />
          <Filter />
        </Flex>
        <SimpleGrid columns={2} gap={6}>
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
