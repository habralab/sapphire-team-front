import { Flex, Icon, Box, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import { ChatDto } from '~/shared/lib/types';
import { SAvatar } from '~/shared/ui/SAvatar';
import { SText } from '~/shared/ui/SText';

import { data } from '../chat';

export function DialogPage() {
  const { id } = useParams();
  const [state, setState] = useState<ChatDto>();

  useEffect(() => {
    if (id) {
      setState(data.find((chat) => +chat.id === +id));
    }
  }, [id]);

  return (
    <>
      {state && id ? (
        <Flex align="center" gap={2}>
          <Link to={'/chats'}>
            <Icon as={FiChevronLeft} />
          </Link>
          <SAvatar name={state.name} />
          <VStack spacing={0} align="start">
            <SText variant="h3" mb={0}>
              {state.title}
            </SText>
            <SText variant="h3" mb={0}>
              {state.name}
            </SText>
          </VStack>
        </Flex>
      ) : (
        <SText>Загрузка</SText>
      )}
    </>
  );
}
