import { Flex, Heading, Container, TabPanels, TabPanel } from '@chakra-ui/react';

import { ProfileCardNotAuth } from '~/entities/user';

import { GoBack } from '~/shared/ui/GoBack';

import { ProfileTabs } from './ProfileTabs';
import { NotAuthTab } from './tabs/not-auth';

export function DeletedProfile() {
  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" mt={4} mb={16} h={42} gap={2}>
        <GoBack prevCount={-2} />
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
      </Flex>
      <ProfileCardNotAuth isDeleted />
      <ProfileTabs>
        <TabPanels>
          <TabPanel>
            <NotAuthTab isDeleted />
          </TabPanel>
          <TabPanel>
            <NotAuthTab isDeleted />
          </TabPanel>
        </TabPanels>
      </ProfileTabs>
    </Container>
  );
}
