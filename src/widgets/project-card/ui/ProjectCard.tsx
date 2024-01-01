import { CardBody, Card as ChakraCard, type CardProps } from '@chakra-ui/react';
import React from 'react';

import { Card, type PROJECT_STATUSES } from '~/entities/project';

import { useIsMobile } from '~/shared/hooks';

interface ProjectCardInfo {
  status: keyof typeof PROJECT_STATUSES;
  name: string;
  startline: string;
  description: string | null;
}

type ProjectCardProps = {
  info: ProjectCardInfo;
  children: React.ReactNode;
} & CardProps;

export const ProjectCard = ({ info, children, ...others }: ProjectCardProps) => {
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
        <Card info={info} />
        {children}
      </CardBody>
    </ChakraCard>
  );
};
