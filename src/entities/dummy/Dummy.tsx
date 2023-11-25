import { Flex } from '@chakra-ui/react';

import { useAuth } from '~/shared/hooks';

import { Buttons } from './Buttons';

interface DummyProps {
  children: JSX.Element[];
}

export function Dummy({ children }: DummyProps) {
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
      {children}
      {isAuth && <Buttons />}
    </Flex>
  );
}
