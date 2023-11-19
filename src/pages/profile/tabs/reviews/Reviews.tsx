import { Stack, Text } from '@chakra-ui/react';

import { Reviews } from '~/entities/user';

import { Rating } from '~/shared/ui/rating';

const dummyReviews = [
  {
    date: '3 сентября 2022',
    name: 'Михаил Шафутинский',
    userStatus: 'Участник проекта',
    project: 'Сервис онлайн-образования',
    review:
      'Все прошло отлично. Спасибо Денису за оперативность. Организация на высшем уровне. Показал, рассказал все по уму.',
  },
  {
    date: '3 сентября 2022',
    name: 'Михаил Шафутинский',
    userStatus: 'Участник проекта',
    project: 'Сервис онлайн-образования',
    review:
      'Все прошло отлично. Спасибо Денису за оперативность. Организация на высшем уровне. Показал, рассказал все по уму.',
  },
  {
    date: '3 сентября 2022',
    name: 'Михаил Шафутинский',
    userStatus: 'Участник проекта',
    project: 'Сервис онлайн-образования',
    review:
      'Все прошло отлично. Спасибо Денису за оперативность. Организация на высшем уровне. Показал, рассказал все по уму.',
  },
];

export const ReviewsTab = () => {
  return dummyReviews.length > 0 ? (
    <Stack gap={4}>
      {dummyReviews.map((review, i) => (
        <Reviews key={`review-${i}`} rating={<Rating />} {...review} />
      ))}
    </Stack>
  ) : (
    <Text color="gray.400" textAlign="center" pt={20} pb={40}>
      У вас пока нет отзывов
    </Text>
  );
};
