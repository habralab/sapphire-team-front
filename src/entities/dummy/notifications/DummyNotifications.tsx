import { Text } from '@chakra-ui/react';

import { NotificationImage } from '~/shared/ui/NotificationImage';

import { DummyWrapper } from '../base';

export function DummyNotifications() {
  return (
    <DummyWrapper>
      <NotificationImage />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Нет уведомлений
      </Text>
      <Text color="gray.700" textAlign="center">
        Здесь будут отображаться диалоги c Вашими тиммейтами
      </Text>
    </DummyWrapper>
  );
}
