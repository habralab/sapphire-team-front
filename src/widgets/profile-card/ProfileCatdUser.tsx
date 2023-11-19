import {
  Text,
  Flex,
  Image,
  Center,
  SkeletonText,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Info, useIsAvatarExist } from '~/entities/user';

import { GetUserResponse } from '~/shared/api';
import { useApi, useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import NotAuth from './notAuth.png';

const defaultName = 'Гость';

interface ProfileCardProps {
  user: GetUserResponse;
}

export function ProfileCardUser({ user }: ProfileCardProps) {
  const { isAuth } = useAuth();
  const [name, setName] = useState(
    user.first_name && user.last_name
      ? `${user.first_name} ${user.last_name}`
      : defaultName,
  );

  const { userApi } = useApi();

  const avatar = userApi.getAvatar(user.id);
  const { data: isAvatarExist, isLoading, isSuccess } = useIsAvatarExist(user.id);

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
        {isAuth && isSuccess ? (
          <Avatar name={name} src={avatar} h={20} w={20} />
        ) : isLoading ? (
          <Avatar name=" " src={avatar} h={20} w={20} />
        ) : (
          <Image
            src={NotAuth}
            objectFit="contain"
            objectPosition="center"
            h={16}
            w={16}
          />
        )}
      </Center>
      {isLoading && isAuth ? (
        <SkeletonText noOfLines={1} skeletonHeight="5" w="60%" pt={16} mb={3} />
      ) : (
        <Text align="center" fontWeight="bold" fontSize="2xl" pt={16} mb={4}>
          {name}
        </Text>
      )}
      <Info />
      <Flex px={4} pb={4} w="full">
        {isAuth && (
          <Button as={Link} to={PATHS.profileSettings} variant="light" w="full">
            Редактировать
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
