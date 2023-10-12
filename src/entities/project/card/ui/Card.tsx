import { SText } from '~/shared/ui/SText';

import { CardProps } from '../types/CardTypes';

export const Card = (props: CardProps) => {
  const { title, date, description } = props;

  return (
    <>
      <SText variant="h2">{title}</SText>
      <SText variant="caption">{date}</SText>
      <SText variant="main" noOfLines={3}>
        {description}
      </SText>
    </>
  );
};
