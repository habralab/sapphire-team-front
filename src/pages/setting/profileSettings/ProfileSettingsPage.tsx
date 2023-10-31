import { Container, Flex, Heading } from '@chakra-ui/react';

import { UpdateUser } from '~/features/user';

import { GoBack } from '~/shared/ui/GoBack';

export function ProfileSettingsPage() {
  return (
    <Container maxW="md" px={5} w="full">
      <Flex alignItems="center" mt={4} mb={6} gap={2}>
        <GoBack />
        <Heading variant="h2" as="h1" mb={0}>
          Профиль
        </Heading>
      </Flex>

      <UpdateUser />
    </Container>
  );
}
