import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react';

import { SLink } from '~/shared/ui/SLink';

interface ReviewType {
  rating: JSX.Element;
}

export function Reviews(props: ReviewType) {
  const { rating } = props;

  return (
    <Stack p={5} borderRadius="2xl" bg="white" gap={3}>
      <HStack justifyContent="space-between">
        <Text variant="caption">3 сентября 2022</Text>
        {rating}
      </HStack>
      <Box>
        <Heading variant="h2" mb={1}>
          Михаил Шафутинский
        </Heading>
        <Text variant="caption" mb={1}>
          Участник проекта
        </Text>
        <SLink to="#">Сервис онлайн-образования</SLink>
      </Box>
      <Text>
        Все прошло отлично. Спасибо Денису за оперативность. Организация на высшем уровне.
        Показал, рассказал все по уму.
      </Text>
    </Stack>
  );
}
