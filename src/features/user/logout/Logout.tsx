import { Button, Container, Icon, Portal } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';

import { useLayoutRefs, useAuth, useApi } from '~/shared/hooks';

export function Logout() {
  const layout = useLayoutRefs();
  const { isAuth } = useAuth();
  const { userApi } = useApi();

  return layout?.footer && isAuth ? (
    <Portal containerRef={layout.footer}>
      <Container py={4} maxW="md">
        <Button
          w="full"
          variant="light"
          colorScheme="gray"
          onClick={() => userApi.logout()}
        >
          Выйти
          <Icon ml={2} fontSize="2xl" as={IoLogOutOutline} />
        </Button>
      </Container>
    </Portal>
  ) : null;
}
