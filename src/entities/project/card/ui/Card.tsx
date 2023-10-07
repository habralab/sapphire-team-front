import { Heading, Text } from '@chakra-ui/react';

import { TextWithRows } from '~/shared/ui/TextWithRows';

import { ICard } from '../model/CardModel';

export const Card = (props: ICard) => {
  const { title, date, description } = props;

  return (
    <>
      <Heading variant="h4">{title}</Heading>
      <Text variant="cardTextMobile" color="gray.500">
        {date}
      </Text>
      <TextWithRows rows={3} text={description} />
    </>
  );
};
