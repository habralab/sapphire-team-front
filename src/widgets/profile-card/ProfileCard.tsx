import { Avatar, Text, Flex, Image, Center, SkeletonText } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Info } from '~/entities/user';

import { useIsAuth, useApi } from '~/shared/hooks';

import NotAuth from './notAuth.png';

const defaultName = 'Гость';

export function ProfileCard() {
  const isAuth = useIsAuth();
  const { userApi } = useApi();
  const [name, setName] = useState<{ firstName: string; lastName: string }>({
    firstName: defaultName,
    lastName: '',
  });
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuth)
      userApi
        .getMe()
        .then((res) => {
          setName({
            firstName: res.first_name ?? defaultName,
            lastName: res.last_name ?? '',
          });
          setAvatar(undefined);
        })
        .catch(() => {
          setName({ firstName: defaultName, lastName: '' });
          setAvatar(NotAuth);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [isAuth]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="white"
      w="100%"
      borderRadius="2xl"
      position="relative"
      mb={4}
    >
      {avatar ? (
        <Avatar
          name={`${name.firstName} ${name.lastName}`}
          variant="profileAvatar"
          border="0.5rem solid white"
          position="absolute"
          top={-10}
          boxSizing="content-box"
          src={avatar}
        />
      ) : (
        <Center
          border="0.5rem solid white"
          position="absolute"
          top={-10}
          borderRadius="full"
          w={20}
          h={20}
          boxSizing="content-box"
          bg="white"
        >
          <Image
            src={NotAuth}
            objectFit="contain"
            objectPosition="center"
            h={16}
            w={16}
          />
        </Center>
      )}
      {loading && isAuth ? (
        <SkeletonText noOfLines={1} skeletonHeight="5" w="60%" pt={16} mb={3} />
      ) : (
        <Text align="center" fontWeight="bold" fontSize="2xl" pt={16} mb={4}>
          {`${name.firstName} ${name.lastName}`}
        </Text>
      )}
      <Info />
    </Flex>
  );
}
