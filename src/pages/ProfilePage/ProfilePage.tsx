import {
  Container,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@chakra-ui/react';

import { ReviewsList } from '~/widgets/ReviewsList';

import { Notification } from '~/features/notofication';
import { Setting } from '~/features/setting';

import { AboutMe, ProfileCard, Projects } from '~/entities/profile';

import { SText } from '~/shared/ui/SText';

export function ProfilePage() {
  return (
    <Container maxW="md" p={5}>
      <Flex alignItems="center" justifyContent="space-between" mb={16}>
        <SText variant="h1">Профиль</SText>
        <Flex gap={4}>
          <Notification />
          <Setting />
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
    </Container>
  );
}
