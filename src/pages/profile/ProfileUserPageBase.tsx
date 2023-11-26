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
import { useLayoutEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { ProfileCard, ProfileCardNotAuth } from '~/widgets/profile-card';

import { GoBack } from '~/shared/ui/GoBack';

import { AboutMeTab } from './tabs/about-me';
import { NotAuthTab } from './tabs/not-auth';
import { ProjectsTab } from './tabs/projects';

const tabs = ['about', 'projects', 'reviews'];

export function ProfileUserPageBase() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  useLayoutEffect(() => {
    if (!searchParams.get('tab')) {
      setSearchParams({ tab: tabs[0] });
    }
  }, [searchParams]);

  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" mt={4} mb={16} h={42} gap={4}>
        <GoBack />
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
      </Flex>
      {id ? <ProfileCard userId={id} /> : <ProfileCardNotAuth />}
      <Tabs
        variant="base"
        index={
          searchParams.get('tab')
            ? tabs.findIndex((name) => name === searchParams.get('tab'))
            : undefined
        }
        onChange={(index) => {
          setSearchParams({ tab: tabs[index] });
        }}
      >
        <TabList>
          <Tab>Обо мне</Tab>
          <Tab>Проекты</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{id ? <AboutMeTab userId={id} /> : <NotAuthTab />}</TabPanel>
          <TabPanel>{id ? <ProjectsTab userId={id} /> : <NotAuthTab />}</TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
