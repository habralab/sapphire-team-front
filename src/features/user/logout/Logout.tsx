import { Button, Container, Icon, Portal } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';

import { useLayoutRefs, useIsAuth, useApi } from '~/shared/hooks';

export function Logout() {
  const layout = useLayoutRefs();
  const isAuth = useIsAuth();
  const { userApi } = useApi();

  return layout?.footer && isAuth ? (
    <Portal containerRef={layout.footer}>
      <Container py={4} maxW="md">
        <Button w="full" onClick={() => userApi.logout()}>
          Выйти
          <Icon ml={2} w={6} h={6} as={IoLogOutOutline} />
        </Button>
      </Container>
    </Portal>
  ) : null;
}
