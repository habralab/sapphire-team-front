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
        '-webkit-line-clamp': `${props.rows}`,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
      }}
    >
      {props.text}
    </Text>
  );
};
