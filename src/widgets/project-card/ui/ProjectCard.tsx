import { CardBody, CardProps, Card as ChakraCard } from '@chakra-ui/react';
import React from 'react';

import { Status } from '~/features/project';

import { Card } from '~/entities/project';

import { adapterCard } from '../api/adapterCard';

type ProjectCardProps = {
  status: string;
  title: string;
  date: string | null;
  description: string | null;
  children: React.ReactNode;
} & CardProps;

export const ProjectCard = (props: ProjectCardProps) => {
  const { status, title, date, description, children, ...others } = props;

  const formatData = adapterCard(title, date, description);

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
        <Card
          date={formatData.title}
          description={formatData.description}
          title={formatData.title}
        />
        {children}
      </CardBody>
    </ChakraCard>
  );
};
