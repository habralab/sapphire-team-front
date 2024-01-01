import { Heading, Text } from '@chakra-ui/react';

import { useIsMobile } from '~/shared/hooks';

import {
  PROJECT_STATUSES_MESSAGES,
  type PROJECT_STATUSES,
} from '../../Project.constants';
import { Status } from '../../status';

export interface CardInfo {
  status: keyof typeof PROJECT_STATUSES;
  name?: string;
  startline?: string | null;
  description?: string | null;
}

interface CardProps {
  info: CardInfo;
  fullDescription?: boolean;
}

export const Card = (props: CardProps) => {
  const { fullDescription } = props;
  const { name, startline, description, status } = props.info;
  const isMobile = useIsMobile();

  return (
    <>
      <Status mb={isMobile ? 3 : 4}>{PROJECT_STATUSES_MESSAGES[status]}</Status>
      <Heading variant="h2" overflowWrap="anywhere" noOfLines={3}>
        {name}
      </Heading>
      <Text variant="caption" mb={3}>
        {startline}
      </Text>
      {fullDescription ? (
        <Text mb={3} overflowWrap="anywhere">
          {description}
        </Text>
      ) : (
        <Text noOfLines={3} mb={3} overflowWrap="anywhere">
          {description}
        </Text>
      )}
    </>
  );
};
