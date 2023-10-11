import { CardBody, Card as ChakraCard } from '@chakra-ui/react';

import { Status } from '~/features/project';

import { Card } from '~/entities/project';

import { STag } from '~/shared/ui/STag';

import { ProjectCardProps } from '../model';

export const ProjectCard = (props: ProjectCardProps) => {
  const { status, title, date, description, page, mainTag, tags } = props;
  return (
    <ChakraCard
      borderRadius="2xl"
      _active={{ boxShadow: '2xl' }}
      boxShadow="none"
      alignContent="center"
      mb="1rem"
    >
      <CardBody display="flex" padding="1.25rem" flexDirection="column">
        <Status mb="0.75rem">{status}</Status>
        <Card title={title} date={date} description={description} />
        {page === 'search' && <STag mainTag={mainTag} tags={tags} />}
      </CardBody>
    </ChakraCard>
  );
};
