import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Avatar, Skeleton } from '@chakra-ui/react';
import { generatePath } from 'react-router-dom';

import { useApi, useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { DummyAvatar } from '~/shared/ui/DummyAvatar';
import { Rating } from '~/shared/ui/Rating';
import { SLink } from '~/shared/ui/SLink';

import { useGetUser } from '../api';

export const Contacts = ({ ownerId }: { ownerId: string }) => {
  const { userApi } = useApi();
  const { isAuth } = useAuth();
  const avatarUrl = userApi.getAvatar(ownerId);
  const { data: owner, isLoading: loadedOwner, isSuccess } = useGetUser(ownerId);

  return (
    <>
      <Heading variant="h2">Участники</Heading>
      <Skeleton isLoaded={!loadedOwner} borderRadius="2xl" fadeDuration={2}>
        {isSuccess ? (
          <Flex alignItems="center">
            <Avatar src={avatarUrl} name={`${owner.first_name} ${owner.last_name}`} />
            <Stack pl={2} gap={0} whiteSpace="nowrap" overflow="hidden">
              <Heading
                minWidth={0}
                variant="h3"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {owner.first_name} {owner.last_name}
              </Heading>
              <Text variant="caption">Организатор</Text>
              {isAuth && (
                <SLink to={generatePath(PATHS.profile, { id: ownerId })}>
                  Перейти в профиль
                </SLink>
              )}
            </Stack>
            {/* <Flex ml="auto">
              <Rating />
            </Flex> */}
          </Flex>
        ) : (
          <Flex alignItems="center">
            <DummyAvatar w={10} h={10} />
            <Stack pl={2} gap={0} whiteSpace="nowrap" overflow="hidden">
              <Heading
                minWidth={0}
                variant="h3"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                Удаленный профиль
              </Heading>
              <Text variant="caption">Организатор</Text>
              {isAuth && (
                <SLink to={generatePath(PATHS.deletedProfile)}>Перейти в профиль</SLink>
              )}
            </Stack>
          </Flex>
        )}
      </Skeleton>
    </>
  );
};
