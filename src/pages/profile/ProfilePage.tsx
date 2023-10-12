import { Flex, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';

import { ReviewsList } from '~/widgets/rewiews-list';

import { Notification, Settings } from '~/features/user';

import { AboutMe, ProfileCard, Projects } from '~/entities/user';

import { SText } from '~/shared/ui';

export function ProfilePage() {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb={16}>
        <SText variant="h1">Профиль</SText>
        <Flex gap={4} alignItems="baseline">
          <Notification />
          <Settings />
        </Flex>
      </Flex>
      <ProfileCard />
      <Tabs my={4} variant="base">
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
            <Projects />
          </TabPanel>
          <TabPanel>
            <ReviewsList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
