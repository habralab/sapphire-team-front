import { Box, Button, Container, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { IoOptions } from 'react-icons/io5';

import { data } from '~/pages/SearchPage';

import { ProjectCard } from '~/widgets/project-card';

import { FilterProject, SearchProject } from '~/features/projects-list';

export const SearchPage = () => {
  const [isActiveInput, setActiveInput] = useState(false);
  return (
    <Container maxW="container.sm" mt={5}>
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
          />
          {isActiveInput && (
            <Button
              flex={0}
              minW={'70px'}
              onClick={() => {
                setActiveInput(false);
              }}
              fontSize={{
                base: 'sm',
                sm: '2xl',
                md: '4xl',
              }}
              fontWeight={400}
            >
              Отмена
            </Button>
          )}
          {!isActiveInput && <FilterProject />}
        </Flex>
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} type="all" />
        ))}
      </Flex>
    </Container>
  );
};
