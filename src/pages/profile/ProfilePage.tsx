import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Stack,
  Heading,
  Container,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProfileCard } from '~/widgets/profile-card';
import { ProjectCard } from '~/widgets/project-card';

import { Notification, Rating, Settings } from '~/features/user';

import { AvatarsGroup } from '~/entities/project';
import { AboutMe, Reviews } from '~/entities/user';

import { data } from '~/shared/lib/data';
import { STag } from '~/shared/ui/STag';

const tabs = ['about', 'projects', 'reviews'];

export function ProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('tab')) {
      setSearchParams({ tab: tabs[0] });
    }
  }, [searchParams]);

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
    <Container maxW="md" mb={4}>
      <Flex justifyContent="space-between" alignItems="center" mt={4} mb={16}>
        <Heading variant="h1" as="h1">
          Поиск
        </Heading>
        <Flex gap={4} alignItems="baseline">
          <Notification />
          <Settings />
        </Flex>
      </Flex>
      <ProfileCard />
      <Tabs
        variant="base"
        index={tabs.findIndex((name) => name === searchParams.get('tab'))}
        onChange={(index) => {
          setSearchParams({ tab: tabs[index] });
        }}
      >
        <TabList>
          <Tab>Обо мне</Tab>
          <Tab>Проекты</Tab>
          <Tab>Отзывы</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AboutMe />
          </TabPanel>
          <TabPanel>
            <Stack gap={4}>
              {data.map((project) => {
                return (
                  <ProjectCard
                    key={project.id}
                    status={project.status}
                    title={project.title}
                    date={project.date}
                    description={project.description}
                  >
                    <Flex justifyContent="space-between" alignItems="center">
                      <STag mainTags={['Организатор']} />
                      <AvatarsGroup avatars={dummyAvatars} />
                    </Flex>
                  </ProjectCard>
                );
              })}
            </Stack>
          </TabPanel>
          <TabPanel>
            {dummyReviews.length > 0 ? (
              <Stack gap={4}>
                {dummyReviews.map((review, i) => (
                  <Reviews key={`review-${i}`} rating={<Rating />} {...review} />
                ))}
              </Stack>
            ) : (
              <Text color="gray.400" textAlign="center" pt={20} pb={40}>
                У вас пока нет отзывов
              </Text>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
