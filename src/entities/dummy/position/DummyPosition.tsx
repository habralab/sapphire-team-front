import { Text } from '@chakra-ui/react';

import { DummyImage } from '~/shared/ui/DummyImage';

import { DummyWrapper } from '../base';

export function DummyPosition() {
  return (
    <DummyWrapper>
      <DummyImage />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Нет заявок
      </Text>
      <Text color="gray.700" textAlign="center">
        Здесь будут отображаться заявки на участие в проекте
      </Text>
    </DummyWrapper>
  );
}
