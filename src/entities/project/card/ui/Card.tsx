import { Heading, Text } from '@chakra-ui/react';

import { SText } from '~/shared/ui/SText';

interface CardProps {
  title: string;
  date: string;
  description: string;
}

export const Card = (props: CardProps) => {
  const { title, date, description } = props;

  return (
    <>
      <SText variant="h2" mb="0.5rem">
        {title}
      </SText>
      <SText variant="caption" mb="0.75rem">
        {date}
      </SText>
      <Text fontSize="sm" noOfLines={3} mb="0.75rem" lineHeight="120%">
        {description}
      </Text>
    </>
  );
};
