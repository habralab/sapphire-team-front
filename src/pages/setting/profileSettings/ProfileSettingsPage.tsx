import { Flex, Heading } from '@chakra-ui/react';

import { UpdateUser } from '~/features/user';

import { GoBack } from '~/shared/ui/GoBack';

export function ProfileSettingsPage() {
  return (
    <Flex direction="column" gap={6} mb={4} px={5} w="full">
      <Flex alignItems="center" mt={4} gap={2}>
        <GoBack />
        <Heading variant="h2" as="h1" mb={0}>
          Профиль
        </Heading>
      </Flex>

      <UpdateUser />
    </Flex>
  );
}
