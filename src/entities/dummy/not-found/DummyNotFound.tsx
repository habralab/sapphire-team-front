import { Image, Text } from '@chakra-ui/react';

import { DummyWrapper } from '../base';

import notFound from './notFound.svg';

interface DummyNotFoundProps {
  text: string;
}

export function DummyNotFound({ text }: DummyNotFoundProps) {
  return (
    <DummyWrapper>
      <Image src={notFound} />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        {text}
      </Text>
      <Text color="gray.700" textAlign="center">
        Попробуйте изменить запрос
      </Text>
    </DummyWrapper>
  );
}
