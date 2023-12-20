import { Heading, Text } from '@chakra-ui/react';

import { useIsMobile } from '~/shared/hooks';
import { Status } from '~/shared/ui/Status';

import type { PROJECT_STATUSES } from '../../Project.constants';
import { PROJECT_STATUSES_MESSAGES } from '../../Project.constants';

export interface CardProps {
  status: keyof typeof PROJECT_STATUSES;
  title?: string;
  date?: string | null;
  description?: string | null;
  fullDescription?: boolean;
}

export const Card = (props: CardProps) => {
  const { title, date, description, status, fullDescription } = props;
  const isMobile = useIsMobile();

  return (
    <>
      <Status mb={isMobile ? 3 : 4}>{PROJECT_STATUSES_MESSAGES[status]}</Status>
      <Heading variant="h2" overflowWrap="anywhere" noOfLines={3}>
        {title}
      </Heading>
      <Text variant="caption" mb={3}>
        {date}
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
