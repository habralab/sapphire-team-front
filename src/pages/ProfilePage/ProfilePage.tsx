import { Container, Flex, Heading } from '@chakra-ui/react';

import { ProfileTabs } from '~/widgets/ProfileTabs';

import { Notification } from '~/features/notofication';
import { Setting } from '~/features/setting';

import { ProfileCard } from '~/entities/profile';

export function ProfilePage() {
  return (
    <Container maxW="xl" p={5}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontWeight="bold" fontSize="2xl">
          Профиль
        </Heading>
        <Flex gap={4} position="relative">
          <Notification />
          <Setting />
        </Flex>
      </Flex>
      <ProfileCard />
      <ProfileTabs />
    </Container>
  );
}
