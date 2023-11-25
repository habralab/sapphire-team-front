import { Flex } from '@chakra-ui/react';

import { useAuth } from '~/shared/hooks';

import { Buttons } from './Buttons';
import { DummyChats } from './DummyChats';
import { DummyNotifications } from './DummyNotifications';
import { DummyProject } from './DummyProject';

type DummyType = 'project' | 'notifications' | 'chats';

interface DummyProps {
  variant: DummyType;
}

export function Dummy({ variant }: DummyProps) {
  const { isAuth } = useAuth();

  return (
    <Flex
      bg="white"
      borderRadius="2xl"
      p={5}
      direction="column"
      alignItems="center"
      gap={5}
    >
      {variant === 'project' && <DummyProject />}
      {variant === 'notifications' && <DummyNotifications />}
      {variant === 'chats' && <DummyChats />}
      {isAuth && <Buttons />}
    </Flex>
  );
}
