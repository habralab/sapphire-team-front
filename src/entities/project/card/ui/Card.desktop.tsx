import { SText } from '~/shared/ui/SText';

import { CardProps } from '../types/CardTypes';

export const CardDesktop = (props: CardProps) => {
  const { title, date, description } = props;

  return (
    <>
      <SText variant="h2" fontSize="xl" mb={4}>
        {title}
      </SText>
      <SText variant="caption" fontSize="sm" mb={4}>
        {date}
      </SText>
      <SText variant="main" noOfLines={3} mb={4}>
        {description}
      </SText>
    </>
  );
};
