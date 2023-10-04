import { Container, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { data } from '~/pages/SearchPage';

import { ProjectCard } from '~/widgets/project-card';

import { FilterProject, SearchProject } from '~/features/projects-list';

export const SearchPage = () => {
  const [isActiveInput, setActiveInput] = useState(false);
  return (
    <Container maxW="container.sm" mt={5} px="20px">
      <Flex
        alignContent={'center'}
        gap={4}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex>
          <SearchProject
            activeInput={(value) => {
              setActiveInput(value);
            }}
            isActiveInput={isActiveInput}
          />
          {!isActiveInput && <FilterProject />}
        </Flex>
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} type="all" />
        ))}
      </Flex>
    </Container>
  );
};
