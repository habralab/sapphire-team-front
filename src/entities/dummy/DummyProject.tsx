import { Image, Text } from '@chakra-ui/react';

import project from './projects.svg';

export function DummyProject() {
  return (
    <>
      <Image src={project} />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        Нет проектов
      </Text>
      <Text color="gray.700" textAlign="center">
        Здесь будут отображаться все ваши проекты в качестве участника и организатора
      </Text>
    </>
  );
}
