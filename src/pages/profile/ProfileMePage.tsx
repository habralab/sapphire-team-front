import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Heading,
  Container,
  TabIndicator,
} from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Login, Settings } from '~/features/user';

import { ProfileCard, ProfileCardNotAuth } from '~/entities/user';

import { useAuth } from '~/shared/hooks';

import { AboutMeTab } from './tabs/about-me';
import { NotAuthTab } from './tabs/not-auth';
import { ProjectsTab } from './tabs/projects';
import { ReviewsTab } from './tabs/reviews';

const tabs = ['about', 'projects', 'reviews'];

export function ProfileMePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { userId } = useAuth();

  useLayoutEffect(() => {
    if (!searchParams.get('tab')) {
      setSearchParams({ tab: tabs[0] });
    }
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
      <Tabs
        variant="animatedBase"
        index={
          searchParams.get('tab')
            ? tabs.findIndex((name) => name === searchParams.get('tab'))
            : undefined
        }
        onChange={(index) => {
          setSearchParams({ tab: tabs[index] });
        }}
      >
        <TabList position="relative">
          <Tab>Обо мне</Tab>
          <Tab>Проекты</Tab>
          {/* <Tab>Отзывы</Tab> */}
          <TabIndicator h="86%" bg="gray.900" borderRadius="full" />
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
