import { Flex, Heading, VStack, Divider } from '@chakra-ui/react';

import { Switcher } from '~/shared/ui/Switcher';

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
        <Switcher>Одобрение отклика</Switcher>
        <Divider variant="light" />
        <Switcher>Отклонение отклика</Switcher>
        <Divider variant="light" />
        <Switcher>Проект закрыт</Switcher>
        <Divider variant="light" />
        <Switcher>Возможность оставить отзыв</Switcher>
        <Divider variant="light" />
        <Switcher>Одобрение публикации</Switcher>
        <Divider variant="light" />
        <Switcher>Правки в публикации</Switcher>
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
        <Switcher>Личные сообщения</Switcher>
        <Divider variant="light" />
        <Switcher>Вам оставили отзыв</Switcher>
      </VStack>
    </Flex>
  );
}
