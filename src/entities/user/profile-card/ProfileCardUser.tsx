import { Text, Flex, Center, SkeletonText, Button, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import type { GetUserResponse } from '~/shared/api/model';
import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import { useGetAvatar, useIsAvatarExist, useUserStatistic } from '../api';

import { Statistic } from './statistic';

interface ProfileCardProps {
  user: GetUserResponse;
}

export function ProfileCardUser({ user }: ProfileCardProps) {
  const { userId } = useAuth();
  const { data: avatar } = useGetAvatar(user.id);
  const { data: isAvatarExist, isLoading } = useIsAvatarExist(user.id);
  const { data: statistic } = useUserStatistic(user.id);

  const name = `${user.first_name} ${user.last_name}`;

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
        {isLoading ? (
          <Avatar name=" " src={avatar} h={20} w={20} />
        ) : (
          <Avatar name={name} src={avatar} h={20} w={20} />
        )}
      </Center>
      {isLoading ? (
        <SkeletonText noOfLines={1} skeletonHeight="5" w="60%" pt={16} mb={3} />
      ) : (
        <Text
          align="center"
          fontWeight="bold"
          fontSize="2xl"
          pt={16}
          px={2}
          mb={4}
          overflowWrap="anywhere"
          noOfLines={1}
        >
          {name}
        </Text>
      )}
      <Statistic statistic={statistic} />
      {userId === user.id && (
        <Flex px={4} pb={4} w="full">
          <Button as={Link} to={PATHS.profileSettings} variant="light" w="full">
            Редактировать
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
