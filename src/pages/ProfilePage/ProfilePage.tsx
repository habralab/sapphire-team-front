import { Container, Flex, Heading } from '@chakra-ui/react';

import { ReviewsList } from '~/widgets/ReviewsList';

import { Notification } from '~/features/notofication';
import { Setting } from '~/features/setting';

import { AboutMe, ProfileCard, Projects } from '~/entities/profile';

import { TabsComponent } from '~/shared/ui/TabsComponent';

export function ProfilePage() {
  return (
    <Container maxW="xl" p={5}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontWeight="bold" fontSize="2xl">
          Профиль
        </Heading>
        <Flex gap={4}>
          <Notification />
          <Setting />
        </Flex>
      </Flex>
      <ProfileCard />
      <TabsComponent
        tabList={['Обо мне', 'Проекты', 'Отзывы']}
        tabPanels={[<AboutMe key={1} />, <Projects key={2} />, <ReviewsList key={3} />]}
      />
    </Container>
  );
}
