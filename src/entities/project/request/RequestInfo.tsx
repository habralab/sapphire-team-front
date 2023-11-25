import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/react';
import React from 'react';

import { Rating } from '~/shared/ui/rating';

interface RequestInfoProps {
  name: string;
  spec: string;
}

export const RequestInfo = ({ name, spec }: RequestInfoProps) => {
  return (
    <Flex alignItems="flex-start">
      <Avatar name={name} />
      <Stack pl={2} gap={0}>
        <Heading variant="h3">{name}</Heading>
        <Text variant="caption">{spec}</Text>
      </Stack>
      <Flex ml="auto">
        <Rating />
      </Flex>
    </Flex>
  );
};
