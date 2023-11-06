import { Heading, Text } from '@chakra-ui/react';

export interface CardProps {
  title: string;
  date: string;
  description: string;
  fullDescription?: boolean;
}

export const Card = (props: CardProps) => {
  const { title, date, description, fullDescription } = props;

  return (
    <>
      <Heading variant="h2">{title}</Heading>
      <Text variant="caption" mb={3}>
        {date}
      </Text>
      {fullDescription ? (
        <Text mb={3}>{description}</Text>
      ) : (
        <Text noOfLines={3} mb={3}>
          {description}
        </Text>
      )}
    </>
  );
};
