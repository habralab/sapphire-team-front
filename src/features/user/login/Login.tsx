import { Button, Container, Portal } from '@chakra-ui/react';

import { useLayoutRefs, useApi } from '~/shared/hooks';

export function Login() {
  const { userApi } = useApi();
  const layout = useLayoutRefs();

  return (
    layout?.footer && (
      <Portal containerRef={layout.footer}>
        <Container py={2} maxW="md">
          <Button w="full" as="a" href={userApi.authURL}>
            Зарегистрироваться
          </Button>
        </Container>
      </Portal>
    )
  );
}
