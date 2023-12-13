import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Heading,
  Container,
} from '@chakra-ui/react';
import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProfileCard, ProfileCardNotAuth } from '~/widgets/profile-card';

import { Login, Settings } from '~/features/user';

import { useAuth } from '~/shared/hooks';

import { AboutMeTab } from './tabs/about-me';
import { NotAuthTab } from './tabs/not-auth';
import { ProjectsTab } from './tabs/projects';
import { ReviewsTab } from './tabs/reviews';

enum EnumTabs {
  about,
  projects,
  reviews,
}

type TabKeys = keyof typeof EnumTabs;

export function ProfileMePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { userId } = useAuth();
  const [currentTab, setCurrentTab] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const searchTab = searchParams.get('tab');
    if (!searchTab) {
      setSearchParams({ tab: 'about' });
    }
    setCurrentTab(searchTab ? EnumTabs[searchTab as TabKeys] : undefined);
  }, [searchParams]);

  return (
    <Container maxW="md" mb={4}>
      <Flex justifyContent="space-between" alignItems="center" mt={4} mb={16} h={42}>
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
        <Flex gap={4} alignItems="baseline">
          {userId && <Settings />}
          {/* <Notification /> */}
        </Flex>
      </Flex>
      {userId ? <ProfileCard userId={userId} /> : <ProfileCardNotAuth />}
      <Tabs variant="base" index={currentTab}>
        <TabList>
          <Tab
            onClick={() => {
              setSearchParams({ tab: 'about' });
            }}
          >
            Обо мне
          </Tab>
          <Tab
            onClick={() => {
              setSearchParams({ tab: 'projects' });
            }}
          >
            Проекты
          </Tab>
          {/* <Tab>Отзывы</Tab> */}
        </TabList>

        <TabPanels>
          <TabPanel>{userId ? <AboutMeTab userId={userId} /> : <NotAuthTab />}</TabPanel>
          <TabPanel>{userId ? <ProjectsTab userId={userId} /> : <NotAuthTab />}</TabPanel>
          {/* <TabPanel>{userId ? <ReviewsTab /> : <NotAuthTab />}</TabPanel> */}
        </TabPanels>
      </Tabs>
      {userId ? null : <Login />}
    </Container>
  );
}
