import { Flex, TabPanels, TabPanel, Heading, Container } from '@chakra-ui/react';

import { Login, Settings } from '~/features/user';

import { ProfileCard, ProfileCardNotAuth } from '~/entities/user';

import { useAuth } from '~/shared/hooks';

import { ProfileTabs } from './ProfileTabs';
import { AboutMeTab } from './tabs/about-me';
import { NotAuthTab } from './tabs/not-auth';
import { ProjectsTab } from './tabs/projects';

export function ProfileMePage() {
  const { userId } = useAuth();

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
      <ProfileTabs>
        <TabPanels>
          <TabPanel>{userId ? <AboutMeTab userId={userId} /> : <NotAuthTab />}</TabPanel>
          <TabPanel>{userId ? <ProjectsTab userId={userId} /> : <NotAuthTab />}</TabPanel>
        </TabPanels>
      </ProfileTabs>
      {userId ? null : <Login />}
    </Container>
  );
}
