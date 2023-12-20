import { CardBody, Card as ChakraCard, type CardProps } from '@chakra-ui/react';
import React from 'react';

import { Card, type PROJECT_STATUSES } from '~/entities/project';

import { useIsMobile } from '~/shared/hooks';

type ProjectCardProps = {
  status: keyof typeof PROJECT_STATUSES;
  title: string;
  date: string;
  description: string | null;
  children: React.ReactNode;
} & CardProps;

export const ProjectCard = ({
  status,
  title,
  date,
  description,
  children,
  ...others
}: ProjectCardProps) => {
  const isMobile = useIsMobile();

  return (
    <ChakraCard
      borderRadius="2xl"
      _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
      _active={{ boxShadow: '2xl' }}
      boxShadow="none"
      alignContent="center"
      {...others}
    >
      <CardBody padding={isMobile ? 5 : 6}>
        <Card date={date} description={description} title={title} status={status} />
        {children}
      </CardBody>
    </ChakraCard>
  );
};
