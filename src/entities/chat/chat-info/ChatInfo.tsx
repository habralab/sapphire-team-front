import { Flex, Icon, Heading, IconButton, Stack, HStack } from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { SAvatar } from '~/shared/ui/SAvatar';

interface ChatInfoProps {
  isDesktop?: boolean;
}

export function ChatInfo({ isDesktop }: ChatInfoProps) {
  const navigate = useNavigate();

  return (
    <Flex align="center" gap={2} pb={4} pt={4} pl={isDesktop ? '6' : '0'}>
      {!isDesktop && (
        <IconButton
          aria-label="back"
          onClick={() => {
            navigate(-1);
          }}
          icon={<Icon as={FiChevronLeft} fontSize="2xl" />}
          variant="flat"
          marginLeft="-2"
        />
      )}

      <SAvatar name="Татьяна Андреева" />

      <Stack spacing={1}>
        <HStack>
          <Icon as={BsFillBriefcaseFill} />
          <Heading fontSize="sm" fontWeight="medium">
            Сервис онлайн-образования
          </Heading>
        </HStack>
        <Heading fontSize="sm" fontWeight="medium" as="h3">
          Татьяна Андреева
        </Heading>
      </Stack>
    </Flex>
  );
}
