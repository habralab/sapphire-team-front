import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Avatar, Skeleton } from '@chakra-ui/react';
import React from 'react';

import { Rating } from '~/shared/ui/rating';

import { useGetUser } from '../api';

export const Contacts = ({ ownerId }: { ownerId: string }) => {
  const { data: owner, isSuccess: loadedOwner } = useGetUser(ownerId);
  return (
    <>
      <Heading variant="h2">Контакты</Heading>
      <Skeleton isLoaded={loadedOwner} borderRadius="2xl" fadeDuration={2}>
        <Flex alignItems="flex-start">
          <Avatar src="" name={`${owner?.first_name} ${owner?.last_name}`} />
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
    </>
  );
};
