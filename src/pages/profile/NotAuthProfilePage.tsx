import { Flex, Heading, Container, Text, Tabs, TabList, Tab } from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProfileCardNotAuth } from '~/widgets/profile-card';

import { Login, Notification, Settings } from '~/features/user';

const tabs = ['about', 'projects', 'reviews'];

export function NotAuthProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  useLayoutEffect(() => {
    if (!searchParams.get('tab')) {
      setSearchParams({ tab: tabs[0] });
    }
  }, [searchParams]);

  return (
    <Container maxW="md" mb={4}>
      <Flex justifyContent="space-between" alignItems="center" mt={4} mb={16} h={42}>
        <Heading variant="h1" as="h1">
          Профиль
        </Heading>
        <Flex gap={4} alignItems="baseline">
          <Notification />
          <Settings />
        </Flex>
      </Flex>
      <ProfileCardNotAuth />
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
      <Text textAlign="center" color="gray.700">
        Для создания личного профиля необходимо зарегистрироваться
      </Text>
      <Login />
    </Container>
  );
}
