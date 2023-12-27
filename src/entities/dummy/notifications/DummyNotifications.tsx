import { Text } from '@chakra-ui/react';

import { DummyImage } from '~/shared/ui/DummyImage';

import { DummyWrapper } from '../base';

export function DummyNotifications() {
  return (
    <DummyWrapper>
      <DummyImage />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Нет уведомлений
      </Text>
      <Text color="gray.700" textAlign="center">
        Здесь будут отображаться все уведомления о Ваших проектах
      </Text>
    </DummyWrapper>
  );
}
