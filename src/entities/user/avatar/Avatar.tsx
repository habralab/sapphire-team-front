import {
  Flex,
  Text,
  Stack,
  SkeletonCircle,
  SkeletonText,
  Image,
  Center,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { useApi, useAuth } from '~/shared/hooks';
import { SLink } from '~/shared/ui/SLink';

import NotAuth from './notAuth.svg';

const defaultName = 'Хабраюзер';

export const Avatar = () => {
  const { userApi } = useApi();
  const { isAuth, userId } = useAuth();

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ['ownerID', userId],
    queryFn: () => userApi.getUser(userId),
    enabled: isAuth,
  });

  return (
    <Flex alignItems="center" gap={2} w="full">
      {isLoading && isFetched ? (
        <>
          <SkeletonCircle startColor="gray.600" endColor="gray.900" size="10" />
          <SkeletonText noOfLines={2} skeletonHeight="4" w="60%" />
        </>
      ) : !isAuth && !data ? (
        <>
          <Center w={10} h={10} bg="white" borderRadius="full">
            <Image src={NotAuth} w={9} h={9} />
          </Center>
          <Stack spacing={0}>
            <Text variant="caption">{`Привет, Гость!`}</Text>
            <SLink external to={userApi.authURL}>
              Зарегистрироваться
            </SLink>
          </Stack>
        </>
      ) : (
        <>
          <Center w={10} h={10} bg="white" borderRadius="full">
            <Image src={NotAuth} w={9} h={9} />
          </Center>
          {/* <ChakraAvatar name={name} src={NotAuth} /> */}
          <Text fontWeight="semibold">{`Привет, ${
            data?.first_name ?? defaultName
          }!`}</Text>
        </>
      )}
    </Flex>
  );
};
