import { Flex, VStack } from '@chakra-ui/react';

import { SLink } from '~/shared/ui/SLink';
import { SText } from '~/shared/ui/SText';

interface ReviewType {
  rating: JSX.Element;
}

export function Reviews(props: ReviewType) {
  const { rating } = props;

  return (
    <VStack align="stretch" spacing={0} p={4} mb={4} borderRadius="2xl" bg="white">
      <Flex align="center" justifyContent="space-between">
        <SText variant="light" text="3 сентября 2022" />
        {rating}
      </Flex>
      <Flex direction="column" py={3} gap={1}>
        <SText variant="medium" text="Михаил Шафутинский" />
        <SText variant="extra small" text="Участник проекта" />
        <SLink link="Сервис онлайн-образования" />
      </Flex>
      <SText
        text="Все прошло отлично. Спасибо Денису за оперативность. Организация на высшем уровне.
        Показал, рассказал все по уму."
      />
    </VStack>
  );
}
