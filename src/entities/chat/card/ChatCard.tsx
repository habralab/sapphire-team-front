import { WarningIcon } from '@chakra-ui/icons';
import { Icon, Flex, Circle } from '@chakra-ui/react';
import { BsFillBriefcaseFill, BsCheck2All } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';

import { ChatDto } from '~/shared/lib/types';
import { SAvatar } from '~/shared/ui/SAvatar';
import { SText } from '~/shared/ui/SText';

export function ChatCard(props: ChatDto) {
  const { title, name, messages, role } = props;
  const lastMessage = messages[messages.length - 1];

  const filterMessage = (status: string) => {
    return messages.filter((mes) => mes.status === status).length;
  };

  return (
    <Flex
      gap={2}
      py={4}
      borderBottom={1}
      borderColor="gray.700"
      _hover={{ bg: 'gray.100', mx: '-4', px: '4' }}
    >
      <SAvatar name={name} />
      <Flex direction="column" gap={1.5}>
        <Flex gap={1} alignItems="center">
          <Icon
            as={role === 'Организатор' ? BsFillBriefcaseFill : IoPerson}
            w={3}
            h={3}
          />
          <SText variant="h3" mb={0}>
            {title}
          </SText>
        </Flex>
        <SText variant="h3" mb={0}>
          {name}
        </SText>
        <SText color="gray.600" mb={0} noOfLines={1}>
          {lastMessage.message}
        </SText>
      </Flex>
      <Flex direction="column" justifyContent="space-between" alignItems="flex-end">
        <SText variant="caption" mb={0}>
          {lastMessage.date}
        </SText>
        {filterMessage('noRead') > 0 && (
          <Circle fontSize="xs" bg="gray.500" px={1} minW={4} minH={4} color="white">
            {filterMessage('noRead')}
          </Circle>
        )}
        {filterMessage('done') > 0 && (
          <Icon as={BsCheck2All} color="purple.600" w={4} h={4} />
        )}
        {filterMessage('noDone') > 0 && (
          <Icon as={BsCheck2All} color="gray.600" w={4} h={4} />
        )}
        {filterMessage('error') > 0 && (
          <Icon as={WarningIcon} color="red.500" w={4} h={4} />
        )}
      </Flex>
    </Flex>
  );
}
