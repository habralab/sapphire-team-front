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
        <SText variant="caption">3 сентября 2022</SText>
        {rating}
      </Flex>
      <Flex direction="column" py={3} gap={1}>
        <SText variant="h2">Михаил Шафутинский</SText>
        <SText variant="caption">Участник проекта</SText>
        <SLink to="#">Сервис онлайн-образования</SLink>
      </Flex>
      <SText>
        Все прошло отлично. Спасибо Денису за оперативность. Организация на высшем уровне.
        Показал, рассказал все по уму.
      </SText>
    </VStack>
  );
}
