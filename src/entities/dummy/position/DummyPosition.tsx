import { Text } from '@chakra-ui/react';

import { NotificationImage } from '~/shared/ui/NotificationImage';

import { DummyWrapper } from '../base';

export function DummyPosition() {
  return (
    <DummyWrapper>
      <NotificationImage />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Нет заявок
      </Text>
      <Text color="gray.700" textAlign="center">
        Здесь будут отображаться заявки на участие в проекте
      </Text>
    </DummyWrapper>
  );
}
