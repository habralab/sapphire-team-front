import { Container, Flex, Heading } from '@chakra-ui/react';

import { SettingsList } from '~/features/user';

import { GoBack } from '~/shared/ui/GoBack';

export function NotificationsSettingsPage() {
  return (
    <Container maxW="md" mb={4} px={5}>
      <Flex alignItems="center" my={4} gap={2}>
        <GoBack />
        <Heading variant="h2" as="h1" mb={0}>
          Уведомления
        </Heading>
      </Flex>
      <SettingsList />
    </Container>
  );
}
