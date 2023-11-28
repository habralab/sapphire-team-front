import { Image, Text } from '@chakra-ui/react';

import { DummyWrapper } from '../base';

import notFound from './notFound.svg';

export function DummyNotFound() {
  return (
    <DummyWrapper>
      <Image src={notFound} />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Упс, проект не найден...
      </Text>
      <Text color="gray.700" textAlign="center">
        Попробуйте изменить запрос
      </Text>
    </DummyWrapper>
  );
}
