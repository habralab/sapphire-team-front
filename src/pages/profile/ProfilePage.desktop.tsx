import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { ProfileCardDesktop } from '~/widgets/profile-card';
import { ProjectCard } from '~/widgets/project-card';

import { Rating } from '~/features/user';

import { AvatarsGroup } from '~/entities/project';
import { Reviews } from '~/entities/user';

import { data } from '~/shared/lib/data';
import { STag } from '~/shared/ui/STag';

export function ProfilePageDesktop() {
  const dummyAvatars = [
    { firstName: 'Alex', lastName: 'Gordon', img: 'https://bit.ly/ryan-florence' },
    { firstName: 'Игорь', lastName: 'Крутой', img: 'https://bit.ly/sage-adebayo' },
    { firstName: 'Джек', lastName: 'Воробей', img: 'https://bit.ly/kent-c-dodds' },
    { firstName: 'Кларк', lastName: 'Кент', img: 'https://bit.ly/prosper-baba' },
    { firstName: 'Джеймс', lastName: 'Бонд', img: 'https://bit.ly/code-beast' },
    { firstName: 'Бернд', lastName: 'Шнайдер', img: 'https://bit.ly/dan-abramov' },
  ];

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
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
      </Flex>
      <ProfileCardDesktop />
      <Flex direction="column">
        <Heading variant="h2">Проекты</Heading>
        {data.length > 0 ? (
          <Flex gap={4} flexWrap="wrap" pb={1} mb={10}>
            {data.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  flex="0 0 45%"
                  _hover={{ boxShadow: 'xs', cursor: 'pointer' }}
                  {...project}
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <STag mainTags={['Организатор']} />
                    <AvatarsGroup avatars={dummyAvatars} />
                  </Flex>
                </ProjectCard>
              );
            })}
          </Flex>
        ) : (
          <Text color="gray.400" textAlign="center" pt={20} pb={40}>
            У вас пока нет проектов
          </Text>
        )}
        <Heading variant="h2">Отзывы</Heading>
        {dummyReviews.length > 0 ? (
          <Flex flexWrap="wrap" gap={4} pb={1}>
            {dummyReviews.map((review, i) => (
              <Reviews
                key={`review-${i}`}
                rating={<Rating />}
                flex="0 0 45%"
                _hover={{ boxShadow: 'xs', cursor: 'pointer' }}
                {...review}
              />
            ))}
          </Flex>
        ) : (
          <Text color="gray.400" textAlign="center" pt={20} pb={40}>
            У вас пока нет отзывов
          </Text>
        )}
      </Flex>
    </Box>
  );
}
