import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProjectCard } from '~/widgets/project-card';
import { ReviewsList } from '~/widgets/rewiews-list';

import { Notification, Settings } from '~/features/user';

import { AvatarsGroup } from '~/entities/project';
import { AboutMe, ProfileCard } from '~/entities/user';

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

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb={16}>
        <Heading variant="h1" as="h1">
          Профиль
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
                  <ProjectCard key={project.id} {...project}>
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
            <ReviewsList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
