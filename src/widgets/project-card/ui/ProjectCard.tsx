import { CardBody, Card as ChakraCard } from '@chakra-ui/react';

import { Status } from '~/features/project';

import { Card } from '~/entities/project';

import { STag } from '~/shared/ui/STag';

export interface ProjectCardProps {
  id: number;
  status: string;
  title: string;
  date: string;
  description: string;
  mainTags: string[];
  tags?: string[];
  page?: 'search' | 'project';
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { status, title, date, description, page, mainTags, tags } = props;
  return (
    <ChakraCard
      borderRadius="2xl"
      _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
      _active={{ boxShadow: '2xl' }}
      boxShadow="none"
      alignContent="center"
      mb={[4, 0]}
    >
      <CardBody padding={['5', '6']}>
        <Status mb={['3', '4']}>{status}</Status>
        <Card title={title} date={date} description={description} />
        {page === 'search' && <STag mainTags={mainTags} tags={tags} />}
      </CardBody>
    </ChakraCard>
  );
};
