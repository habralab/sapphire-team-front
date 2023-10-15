import { Stack, StackProps } from '@chakra-ui/react';

import { Rating } from '~/features/user';

import { Reviews } from '~/entities/user';

export function ReviewsList(props: StackProps) {
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
  return (
    <Stack gap={4}>
      {dummyReviews.map((review, i) => (
        <Reviews key={`review-${i}`} rating={<Rating />} {...review} {...props} />
      ))}
    </Stack>
  );
}
