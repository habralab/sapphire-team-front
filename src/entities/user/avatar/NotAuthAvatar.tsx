import { Flex, Text, Stack, Center } from '@chakra-ui/react';

import { useApi } from '~/shared/hooks';
import { DummyAvatar } from '~/shared/ui/DummyAvatar';
import { SLink } from '~/shared/ui/SLink';

export const NotAuthAvatar = () => {
  const { userApi } = useApi();

  return (
    <Flex alignItems="center" gap={2} w="full">
      <Center w={10} h={10} bg="white" borderRadius="full">
        <DummyAvatar w={9} h={9} />
      </Center>
      <Stack spacing={0}>
        <Text variant="caption">{`Привет, Гость!`}</Text>
        <SLink external to={userApi.authURL}>
          Зарегистрироваться
        </SLink>
      </Stack>
    </Flex>
  );
};
