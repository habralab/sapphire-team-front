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
      <SText variant="h2" mb={2}>
        {title}
      </SText>
      <SText variant="caption" mb={3}>
        {date}
      </SText>
      <SText noOfLines={3} mb={3}>
        {description}
      </SText>
    </>
  );
};
