import { CardBody, Card as ChakraCard, Flex, Badge } from '@chakra-ui/react';

import { Status } from '~/features/project';

import { Card } from '~/entities/project';

import { ProjectTag } from '~/shared/ui/Tags';

import { ProjectCardProps } from '../model';

export const ProjectCard = (props: ProjectCardProps) => {
  const { status, title, date, description, page, tags } = props;
  return (
    <ChakraCard variant="mobile" alignContent="center">
      <CardBody
        display="flex"
        padding="1rem 1rem 0 1rem"
        flexDirection="column"
        gap="0.75rem"
      >
        <Status status={status} />
        <Card title={title} date={date} description={description} />
      </CardBody>
      {page === 'search' && (
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
