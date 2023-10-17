import { Flex, Icon, Heading, IconButton, Stack, HStack } from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';
import { SAvatar } from '~/shared/ui/SAvatar';

export function ChatInfo() {
  return (
    <Flex align="center" gap={2} pb={4}>
      <IconButton
        aria-label="back"
        as={Link}
        to={PATHS.chats}
        icon={<Icon as={FiChevronLeft} />}
        variant="flat"
        marginLeft="-2"
      />

      <SAvatar name="Татьяна Андреева" />

      <Stack spacing={1}>
        <HStack>
          <Icon as={BsFillBriefcaseFill} w={3} h={3} />
          <Heading variant="h3">Сервис онлайн-образования</Heading>
        </HStack>
        <Heading variant="h3" as="h3">
          Татьяна Андреева
        </Heading>
      </Stack>
    </Flex>
  );
}
