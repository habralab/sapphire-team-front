import { Avatar, Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Info } from '~/entities/user';

import { useIsAuth, useApi } from '~/shared/hooks';

import notAuth from './notAuth.svg';

const defaultName = 'Гость';

export function ProfileCard() {
  const isAuth = useIsAuth();
  const { userApi } = useApi();
  const [name, setName] = useState<{ firstName: string; lastName: string }>({
    firstName: defaultName,
    lastName: '',
  });
  const [avatar, setAvatar] = useState<string | undefined>(notAuth);

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
          setAvatar(notAuth);
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
      <Avatar
        name={`${name.firstName} ${name.lastName}`}
        variant="profileAvatar"
        border="0.5rem solid white"
        position="absolute"
        top={-10}
        boxSizing="content-box"
        src={avatar}
      />
      <Text align="center" fontWeight="bold" fontSize="2xl" pt={16} mb={4}>
        {`${name.firstName} ${name.lastName}`}
      </Text>
      <Info />
    </Flex>
  );
}
