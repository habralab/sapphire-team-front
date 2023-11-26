import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Avatar, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { Link, generatePath } from 'react-router-dom';

import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { Rating } from '~/shared/ui/rating';

import { useGetUser } from '../api';

export const Contacts = ({ ownerId }: { ownerId: string }) => {
  const { userApi } = useApi();
  const avatar = userApi.getAvatar(ownerId);
  const { data: owner, isSuccess: loadedOwner } = useGetUser(ownerId);

  return (
    <>
      <Heading variant="h2">Контакты</Heading>
      <Link key={ownerId} to={generatePath(PATHS.profile, { id: ownerId })}>
        <Skeleton isLoaded={loadedOwner} borderRadius="2xl" fadeDuration={2}>
          <Flex alignItems="flex-start">
            <Avatar src={avatar} name={`${owner?.first_name} ${owner?.last_name}`} />
            <Stack pl={2} gap={0}>
              <Heading variant="h3">
                {owner?.first_name} {owner?.last_name}
              </Heading>
              <Text variant="caption">Организатор</Text>
            </Stack>
            <Flex ml="auto">
              <Rating />
            </Flex>
          </Flex>
        </Skeleton>
      </Link>
    </>
  );
};
