import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import { Buttons } from './Buttons';

interface DummyProps {
  children: JSX.Element[];
}

export function DummyWrapper({ children }: DummyProps) {
  const location = useLocation();
  const { isAuth } = useAuth();
  const restrictedPages = [PATHS.search, PATHS.profileSettings, PATHS.onboarding];
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
      {isAuth && !restrictedPages.includes(location.pathname) && <Buttons />}
    </Flex>
  );
}
