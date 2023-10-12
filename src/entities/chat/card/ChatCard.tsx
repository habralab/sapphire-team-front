import { WarningIcon } from '@chakra-ui/icons';
import { Icon, Flex, Avatar, Circle } from '@chakra-ui/react';
import { BsFillBriefcaseFill, BsCheck2All } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';

import { ChatDto } from '~/shared/lib/types';
import { SText } from '~/shared/ui/SText';

export function ChatCard(props: ChatDto) {
  const { title, name, messages, role } = props;

  const noReadMessage = messages.filter((mes) => mes.status === 'noRead').length;
  const doneMessage = messages.filter((mes) => mes.status === 'done').length;
  const noDoneMessage = messages.filter((mes) => mes.status === 'noDone').length;
  const errorMessage = messages.filter((mes) => mes.status === 'error').length;

  return (
    <Flex
      gap={2}
      py={4}
      borderBottom={1}
      borderColor="gray.700"
      _hover={{ bg: 'gray.100', mx: '-4', px: '4' }}
    >
      <Avatar
        name={name}
        bg="gray.900"
        color="white"
        fontWeight="semibold"
        fontSize="sm"
        h={10}
        w={10}
      />
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
          {messages[messages.length - 1].message}
        </SText>
      </Flex>
      <Flex direction="column" justifyContent="space-between" alignItems="flex-end">
        <SText variant="caption" mb={0}>
          {messages[messages.length - 1].date}
        </SText>
        {noReadMessage > 0 && (
          <Circle fontSize="xs" bg="gray.500" px={1} minW={4} minH={4} color="white">
            {noReadMessage}
          </Circle>
        )}
        {doneMessage > 0 && <Icon as={BsCheck2All} color="purple.600" w={4} h={4} />}
        {noDoneMessage > 0 && <Icon as={BsCheck2All} color="gray.600" w={4} h={4} />}
        {errorMessage > 0 && <Icon as={WarningIcon} color="red.500" w={4} h={4} />}
      </Flex>
    </Flex>
  );
}
