import { Flex, Image, Text } from '@chakra-ui/react';

import { useAuth } from '~/shared/hooks';

import { Buttons } from './Buttons';
import chats from './chats.svg';
import notificatios from './notifications.svg';
import projects from './projects.svg';

type DummyVariant = 'project' | 'notifications' | 'chats';

interface DummyProps {
  heading: string;
  children: string;
  variant: DummyVariant;
}

export function Dummy({ children, heading, variant }: DummyProps) {
  const { isAuth } = useAuth();

  const image =
    variant === 'project' ? projects : variant === 'chats' ? chats : notificatios;

  return (
    <Flex
      bg="white"
      borderRadius="2xl"
      p={5}
      direction="column"
      alignItems="center"
      gap={5}
    >
      <Image src={image} />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        {heading}
      </Text>
      <Text color="gray.700" textAlign="center">
        {children}
      </Text>
      {isAuth && <Buttons />}
    </Flex>
  );
}
