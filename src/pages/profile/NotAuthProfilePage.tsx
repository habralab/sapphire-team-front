import { Flex, Heading, Container, Text, Portal, Button } from '@chakra-ui/react';

import { ProfileCard } from '~/widgets/profile-card';

import { useApi, useIsAuth, useLayoutRefs } from '~/shared/hooks';

export function NotAuthProfilePage() {
  const { userApi } = useApi();
  const layout = useLayoutRefs();
  const isAuth = useIsAuth();

  return (
    <Container maxW="md" mb={4}>
      <Flex mt={4} mb={16} h={42}>
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
      </Flex>
      <ProfileCard />
      <Text variant="caption" textAlign="center">
        Для просмотра личного профиля необходимо зарегистрироваться
      </Text>
      {layout?.footer && !isAuth && (
        <Portal containerRef={layout.footer}>
          <Container py={2} maxW="md">
            <Button w="full" as="a" href={userApi.authURL}>
              Зарегистрироваться
            </Button>
          </Container>
        </Portal>
      )}
    </Container>
  );
}
