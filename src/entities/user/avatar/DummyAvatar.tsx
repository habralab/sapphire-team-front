import { Flex, Text, Stack, Image, Center } from '@chakra-ui/react';

import { useApi } from '~/shared/hooks';
import { SLink } from '~/shared/ui/SLink';

import NotAuth from './notAuth.svg';

export const DummyAvatar = () => {
  const { userApi } = useApi();

  return (
    <Flex alignItems="center" gap={2} w="full">
      <Center w={10} h={10} bg="white" borderRadius="full">
        <Image src={NotAuth} w={9} h={9} />
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
