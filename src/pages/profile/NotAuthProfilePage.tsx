import {
  Flex,
  Heading,
  Container,
  Text,
  Portal,
  Button,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProfileCard } from '~/widgets/profile-card';

import { useApi, useIsAuth, useLayoutRefs } from '~/shared/hooks';

const tabs = ['about', 'projects', 'reviews'];

export function NotAuthProfilePage() {
  const { userApi } = useApi();
  const layout = useLayoutRefs();
  const isAuth = useIsAuth();

  const [searchParams, setSearchParams] = useSearchParams();

  useLayoutEffect(() => {
    if (!searchParams.get('tab')) {
      setSearchParams({ tab: tabs[0] });
    }
  }, [searchParams]);

  return (
    <Container maxW="md" mb={4}>
      <Flex mt={4} mb={16} h={42}>
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
      </Flex>
      <ProfileCard />
      <Tabs
        variant="base"
        index={tabs.findIndex((name) => name === searchParams.get('tab'))}
        onChange={(index) => {
          setSearchParams({ tab: tabs[index] });
        }}
      >
        <TabList>
          <Tab>Обо мне</Tab>
          <Tab>Проекты</Tab>
          <Tab>Отзывы</Tab>
        </TabList>
      </Tabs>
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
