import { Image, Text } from '@chakra-ui/react';

import { DummyWrapper } from '../base';

import project from './projects.svg';

export function DummyProject() {
  return (
    <DummyWrapper>
      <Image src={project} />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Нет проектов
      </Text>
      <Text color="gray.700" textAlign="center">
        Здесь будут отображаться все ваши проекты в качестве участника и организатора
      </Text>
    </DummyWrapper>
  );
}
