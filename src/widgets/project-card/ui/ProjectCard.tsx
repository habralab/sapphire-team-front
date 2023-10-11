import { CardBody, Card as ChakraCard } from '@chakra-ui/react';

import { Status } from '~/features/project';

import { Card } from '~/entities/project';

import { STag } from '~/shared/ui/STag';

import { ProjectCardProps } from '../model';

export const ProjectCard = (props: ProjectCardProps) => {
  const { status, title, date, description, page, mainTags, tags } = props;
  return (
    <ChakraCard
      borderRadius="2xl"
      _active={{ boxShadow: '2xl' }}
      boxShadow="none"
      alignContent="center"
      mb="4"
    >
      <CardBody padding="5">
        <Status mb="3">{status}</Status>
        <Card title={title} date={date} description={description} />
        {page === 'search' && <STag mainTags={mainTags} tags={tags} />}
      </CardBody>
    </ChakraCard>
  );
};
