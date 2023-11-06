import { CardBody, CardProps, Card as ChakraCard } from '@chakra-ui/react';
import React from 'react';

import { Status } from '~/features/project';

import { Card } from '~/entities/project';

type ProjectCardProps = {
  status: string;
  title: string;
  date: string | null;
  description: string | null;
  children: React.ReactNode;
} & CardProps;

export const ProjectCard = (props: ProjectCardProps) => {
  const { status, title, date, description, children, ...others } = props;

  return (
    <ChakraCard
      borderRadius="2xl"
      _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
      _active={{ boxShadow: '2xl' }}
      boxShadow="none"
      alignContent="center"
      {...others}
    >
      <CardBody padding={['5', '6']}>
        <Status mb={['3', '4']}>{status}</Status>
        <Card title={title} date={date} description={description} />
        {children}
      </CardBody>
    </ChakraCard>
  );
};
