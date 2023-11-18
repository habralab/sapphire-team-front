import { CardBody, CardProps, Card as ChakraCard } from '@chakra-ui/react';
import React from 'react';

import { Card } from '~/entities/project';

import { useIsMobile } from '~/shared/hooks';
import { Status } from '~/shared/ui/status';

type ProjectCardProps = {
  status: string;
  title: string;
  date: string;
  description: string | null;
  children: React.ReactNode;
} & CardProps;

export const ProjectCard = (props: ProjectCardProps) => {
  const isMobile = useIsMobile();
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
      <CardBody padding={isMobile ? 5 : 6}>
        <Status mb={isMobile ? 3 : 4}>{status}</Status>
        <Card date={date} description={description} title={title} />
        {children}
      </CardBody>
    </ChakraCard>
  );
};
