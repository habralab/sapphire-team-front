import { Text } from '@chakra-ui/react';

interface ITextWithRows {
  text: string;
  rows: number;
}

export const TextWithRows = (props: ITextWithRows) => {
  return (
    <Text
      sx={{
        display: '-webkit-box',
        WebkitLineClamp: `${props.rows}`,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}
    >
      {props.text}
    </Text>
  );
};
