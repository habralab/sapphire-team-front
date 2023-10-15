import { Icon, Flex, Text, Heading, VStack, Stack, HStack } from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';

import { SAvatar } from '~/shared/ui/SAvatar';

import { ChatCardProps } from '../model';

import { Status } from './status';

export function ChatCard(props: ChatCardProps) {
  const { title, name, messages, role } = props;
  const lastMessage = messages[messages.length - 1];
  const count = messages.filter((message) => message.status === 'unread').length;

  return (
    <Flex
      gap={2}
      py={4}
      borderBottom={1}
      borderColor="gray.700"
      _hover={{ bg: 'gray.100', mx: '-5', px: '4' }}
    >
      <SAvatar name={name} />

      <Stack spacing={1}>
        <HStack>
          <Icon
            as={role === 'Организатор' ? BsFillBriefcaseFill : IoPerson}
            w={3}
            h={3}
          />
          <Heading variant="h3">{title}</Heading>
        </HStack>
        <Heading variant="h3" as="h3">
          {name}
        </Heading>
        <Text color="gray.600" noOfLines={1}>
          {lastMessage.message}
        </Text>
      </Stack>

      <VStack justifyContent="space-between" alignItems="flex-end" ml="auto">
        <Text variant="caption">{lastMessage.date}</Text>
        <Status status={lastMessage.status} count={count} />
      </VStack>
    </Flex>
  );
}
