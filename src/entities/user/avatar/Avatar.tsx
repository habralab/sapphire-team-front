import {
  Flex,
  Avatar as ChakraAvatar,
  Text,
  Stack,
  SkeletonCircle,
  SkeletonText,
  Image,
  Center,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useApi, useIsAuth } from '~/shared/hooks';
import { SLink } from '~/shared/ui/SLink';

import NotAuth from './notAuth.svg';

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
          <Center w={10} h={10} bg="white" borderRadius="full">
            <Image src={NotAuth} w={9} h={9} />
          </Center>
          <Stack spacing={0}>
            <Text variant="caption">{`Привет, Гость!`}</Text>
            <SLink to={userApi.authURL}>Зарегистрироваться</SLink>
          </Stack>
        </>
      ) : (
        <>
          <Center w={10} h={10} bg="white" borderRadius="full">
            <Image src={NotAuth} w={9} h={9} />
          </Center>
          {/* <ChakraAvatar name={name} src={NotAuth} /> */}
          <Text fontWeight="semibold">{`Привет, ${name}!`}</Text>
        </>
      )}
    </Flex>
  );
};
