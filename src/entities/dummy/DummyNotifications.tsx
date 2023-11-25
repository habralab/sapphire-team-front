import { Text } from '@chakra-ui/react';

import { NotificationImage } from '~/shared/ui/NotificationImage';

import { Dummy } from './Dummy';

export function DummyNotifications() {
  return (
    <Dummy>
      <NotificationImage />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Нет уведомлений
      </Text>
      <Text color="gray.700" textAlign="center">
        Здесь будут отображаться диалоги c Вашими тиммейтами
      </Text>
    </Dummy>
  );
}
