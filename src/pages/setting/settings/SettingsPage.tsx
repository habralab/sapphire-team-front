import {
  Flex,
  Heading,
  Container,
  VStack,
  Divider,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { GoBack } from '~/shared/ui/GoBack';
import { SettingItem } from '~/shared/ui/SettingsItem';

export function SettingsPage() {
  const { userApi } = useApi();

  return (
    <>
      <Container maxW="md" mb={4}>
        <Flex alignItems="center" my={4} gap={2}>
          <GoBack />
          <Heading variant="h2" as="h1" mb={0}>
            Настройки
          </Heading>
        </Flex>
        <VStack
          alignItems="stretch"
          bg="white"
          px={5}
          py={2}
          borderRadius="2xl"
          spacing={0}
          mt={8}
        >
          <Link to={PATHS.profileSettings}>
            <SettingItem type="heading" variant="h3" icon={FiChevronRight}>
              Профиль
            </SettingItem>
          </Link>
          <Divider variant="light" />
          {/* <Link to={PATHS.notificationsSettings}>
            <SettingItem type="heading" variant="h3" icon={FiChevronRight}>
              Уведомления
            </SettingItem>
          </Link> */}
          {/* <Divider variant="light" /> */}
          {/* TODO: вставить актуальную почту */}
          <ChakraLink href="mailto:">
            <SettingItem type="heading" variant="h3" icon={FiChevronRight}>
              Сообщить о проблеме
            </SettingItem>
          </ChakraLink>
          <Divider variant="light" />
          <Link to="#" onClick={() => userApi.logout()}>
            <SettingItem type="heading" variant="h3" icon={FiChevronRight}>
              Выйти
            </SettingItem>
          </Link>
        </VStack>
      </Container>
    </>
  );
}
