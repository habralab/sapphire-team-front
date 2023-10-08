import { Container, Flex } from '@chakra-ui/react';

import { ReviewsList } from '~/widgets/ReviewsList';

import { Notification } from '~/features/notofication';
import { Setting } from '~/features/setting';

import { AboutMe, ProfileCard, Projects } from '~/entities/profile';

import { SText } from '~/shared/ui/SText';
import { TabsComponent } from '~/shared/ui/TabsComponent';

export function ProfilePage() {
  return (
    <Container maxW="md" p={5}>
      <Flex alignItems="center" justifyContent="space-between">
        <SText variant="h1">Профиль</SText>
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
