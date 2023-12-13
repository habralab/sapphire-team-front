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
import { useParams, useSearchParams } from 'react-router-dom';

import { ProfileCard, ProfileCardNotAuth } from '~/widgets/profile-card';

import { GoBack } from '~/shared/ui/GoBack';

import { AboutMeTab } from './tabs/about-me';
import { NotAuthTab } from './tabs/not-auth';
import { ProjectsTab } from './tabs/projects';

enum EnumTabs {
  about,
  projects,
  reviews,
}

type TabKeys = keyof typeof EnumTabs;

export function ProfileUserPageBase() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
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
      <Flex alignItems="center" mt={4} mb={16} h={42} gap={2}>
        <GoBack prevCount={-2} />
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
      </Flex>
      {id ? <ProfileCard userId={id} /> : <ProfileCardNotAuth />}
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
        </TabList>
        <TabPanels>
          <TabPanel>{id ? <AboutMeTab userId={id} /> : <NotAuthTab />}</TabPanel>
          <TabPanel>{id ? <ProjectsTab userId={id} /> : <NotAuthTab />}</TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
