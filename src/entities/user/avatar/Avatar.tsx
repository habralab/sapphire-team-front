import {
  Flex,
  Avatar as ChakraAvatar,
  Text,
  Stack,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useApi, useIsAuth } from '~/shared/hooks';
import { SLink } from '~/shared/ui/SLink';

const defaultName = 'Хабраюзер';

export const Avatar = () => {
  const { userApi } = useApi();
  const isAuth = useIsAuth();
  const [name, setName] = useState(defaultName);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuth)
      userApi
        .getMe()
        .then((res) => {
          setName(res.first_name ?? defaultName);
        })
        .catch(() => {
          setName(defaultName);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [isAuth]);

  return (
    <Flex alignItems="center" gap={2} w="full">
      {loading && isAuth ? (
        <>
          <SkeletonCircle startColor="gray.600" endColor="gray.900" size="10" />
          <SkeletonText noOfLines={2} skeletonHeight="4" w="60%" />
        </>
      ) : !isAuth ? (
        <>
          <ChakraAvatar name={name} />
          <Stack spacing={0}>
            <Text variant="caption">{`Привет, Гость!`}</Text>
            <SLink to={userApi.authURL}>Зарегистрироваться</SLink>
          </Stack>
        </>
      ) : (
        <>
          <ChakraAvatar name={name} />
          <Text fontWeight="semibold">{`Привет, ${name}!`}</Text>
        </>
      )}
    </Flex>
  );
};
