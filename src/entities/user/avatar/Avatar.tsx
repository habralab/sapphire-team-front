import { Flex, Avatar as ChakraAvatar, Text, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useApi, useIsAuth } from '~/shared/hooks';
import { SLink } from '~/shared/ui/SLink';

const defaultName = 'Хабраюзер';
const gastName = 'Гость';

export const Avatar = () => {
  const { userApi } = useApi();
  const isAuth = useIsAuth();
  const [name, setName] = useState(gastName);

  useEffect(() => {
    if (isAuth)
      userApi
        .getMe()
        .then((res) => {
          setName(res.first_name ?? defaultName);
        })
        .catch(() => {
          setName(gastName);
        });
  }, [isAuth]);

  return (
    <Flex alignItems="center" gap={2}>
      <ChakraAvatar name={name} />
      {isAuth ? (
        <Text fontWeight="semibold">{`Привет, ${name}!`}</Text>
      ) : (
        <Stack spacing={0}>
          <Text variant="caption">{`Привет, ${name}!`}</Text>
          <SLink to={userApi.authURL}>Зарегистрироваться</SLink>
        </Stack>
      )}
    </Flex>
  );
};
