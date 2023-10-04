import { Text } from '@chakra-ui/react';

import { ICard } from '~/entities/project-card';

export const Card = (props: ICard) => {
  const { title, date, description } = props;

  return (
    <>
      <Text
        fontSize={{
          base: 'md',
          sm: '2xl',
          md: '4xl',
        }}
        fontWeight={600}
        lineHeight="120%"
      >
        {title}
      </Text>
      <Text
        fontSize={{
          base: 'xs',
          sm: 'lg',
          md: 'xl',
        }}
        fontWeight={500}
        color="gray.500"
        lineHeight="120%"
      >
        {date}
      </Text>
      <Text
        fontSize={{
          base: 'xs',
          sm: 'lg',
          md: 'xl',
        }}
        fontWeight={500}
        sx={{
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        }}
        lineHeight={{
          base: '120%',
          md: '125%',
        }}
      >
        {description}
      </Text>
    </>
  );
};
