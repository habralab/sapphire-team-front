import { CardBody, Card as ChakraCard } from '@chakra-ui/react';

import { Status } from '~/features/project';

import { CardDesktop } from '~/entities/project';

import { STag } from '~/shared/ui/STag';

import { ProjectCardProps } from '../types/ProjectCardTypes';

export const ProjectCardDesktop = (props: ProjectCardProps) => {
  const { status, title, date, description, page, mainTags, tags } = props;
  return (
    <ChakraCard
      borderRadius="2xl"
      _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
      boxShadow="none"
      alignContent="center"
    >
      <CardBody padding="6">
        <Status mb="4">{status}</Status>
        <CardDesktop title={title} date={date} description={description} />
        {page === 'search' && <STag mainTags={mainTags} tags={tags} />}
      </CardBody>
    </ChakraCard>
  );
};
