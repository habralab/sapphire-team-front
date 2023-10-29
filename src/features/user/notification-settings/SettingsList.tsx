import { Flex, Heading, VStack, Divider } from '@chakra-ui/react';

import { SettingItem } from '~/shared/ui/SettingsItem';

export function SettingsList() {
  return (
    <Flex direction="column">
      <Heading variant="h3" mt={2} mb={4}>
        Колокольчик
      </Heading>
      <VStack
        alignItems="stretch"
        bg="white"
        px={5}
        py={2}
        borderRadius="2xl"
        spacing={0}
      >
        <SettingItem>Одобрение отклика</SettingItem>
        <Divider variant="light" />
        <SettingItem>Отклонение отклика</SettingItem>
        <Divider variant="light" />
        <SettingItem>Проект закрыт</SettingItem>
        <Divider variant="light" />
        <SettingItem>Возможность оставить отзыв</SettingItem>
        <Divider variant="light" />
        <SettingItem>Одобрение публикации</SettingItem>
        <Divider variant="light" />
        <SettingItem>Правки в публикации</SettingItem>
      </VStack>
      <Heading variant="h3" mt={6} mb={4}>
        Push-уведомления
      </Heading>
      <VStack
        alignItems="stretch"
        bg="white"
        px={5}
        py={2}
        borderRadius="2xl"
        spacing={0}
      >
        <SettingItem>Личные сообщения</SettingItem>
        <Divider variant="light" />
        <SettingItem>Вам оставили отзыв</SettingItem>
      </VStack>
    </Flex>
  );
}
