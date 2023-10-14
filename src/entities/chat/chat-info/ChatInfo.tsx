import { Flex, Icon, VStack, Heading } from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';
import { SAvatar } from '~/shared/ui/SAvatar';

export function ChatInfo() {
  return (
    <Flex align="center" gap={2} pb={4}>
      <Link to={PATHS.chats}>
        <Icon as={FiChevronLeft} />
      </Link>
      <SAvatar name="Татьяна Андреева" />
      <VStack spacing={0} align="start">
        <Flex align="center" gap={1}>
          <Icon as={BsFillBriefcaseFill} w={3} h={3} />
          <Heading variant="h3" mb={0}>
            Сервис онлайн-образования
          </Heading>
        </Flex>
        <Heading variant="h3" mb={0}>
          Татьяна Андреева
        </Heading>
      </VStack>
    </Flex>
  );
}
