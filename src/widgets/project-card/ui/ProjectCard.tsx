import { CardBody, Card as ChakraCard, Flex, Badge } from '@chakra-ui/react';

import { Card } from '~/entities/project';

import { ProjectTag } from '~/shared/ui/Tags';

import { IProjectCard } from '../types/ProjectCardTypes';

export const ProjectCard = (props: IProjectCard) => {
  const { status, title, date, description, type, tags } = props;
  return (
    <ChakraCard variant="mobile" alignContent="center">
      <CardBody
        display="flex"
        padding="1rem 1rem 0 1rem"
        flexDirection="column"
        gap="0.75rem"
      >
        <Badge
          background={status === 'Проект завершён' ? 'gray.500' : 'purple.600'}
          fontSize="es"
          textTransform="none"
          fontWeight="600"
          lineHeight="0.4375rem"
          color="white"
          width="fit-content"
          p="0.375rem 0.625rem"
          borderRadius="1.25rem"
        >
          {status}
        </Badge>
        <Card title={title} date={date} description={description} />
      </CardBody>
      {type === 'all' && (
        <Flex
          overflowX="auto"
          p="0.75rem 1rem 1rem 1rem"
          gap="2"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {tags?.map((tag) => <ProjectTag key={tag} tag={tag} />)}
        </Flex>
      )}
    </ChakraCard>
  );
};
