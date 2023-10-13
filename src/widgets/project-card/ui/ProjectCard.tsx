import { CardBody, Card as ChakraCard } from '@chakra-ui/react';

import { Status } from '~/features/project';

import { Card } from '~/entities/project';

interface ProjectCardProps {
  status: string;
  title: string;
  date: string;
  description: string;
  children: React.ReactNode;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { status, title, date, description, children } = props;

  return (
    <ChakraCard
      borderRadius="2xl"
      _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
      _active={{ boxShadow: '2xl' }}
      boxShadow="none"
      alignContent="center"
      mb={4}
    >
      <CardBody padding={['5', '6']}>
        <Status mb={['3', '4']}>{status}</Status>
        <Card title={title} date={date} description={description} />
        {children}
      </CardBody>
    </ChakraCard>
  );
};
