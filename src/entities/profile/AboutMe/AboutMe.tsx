import { Flex } from '@chakra-ui/react';

import { STag } from '~/shared/ui/STag';
import { SText } from '~/shared/ui/SText';

export function AboutMe() {
  return (
    <Flex
      direction="column"
      position="absolute"
      left="0"
      right="0"
      bg="white"
      borderRadius="2xl"
      p={5}
      gap={6}
    >
      <Flex direction="column" gap={2}>
        <SText variant="h2">Обо мне</SText>
        <SText>
          Привет! Меня зовут Татьяна, и я начинающий UX/UI дизайнер, готовый погрузиться в
          мир творчества и пользовательских интерфейсов. Моя страсть к дизайну началась
          давно, и я горжусь тем, что обладаю креативным мышлением и аналитическими
          способностями.
        </SText>
      </Flex>
      <Flex direction="column" gap={2}>
        <SText variant="h2">Профессия</SText>
        <STag mainTags={['Дизайнер', 'UX/UI дизайнер']} />
      </Flex>
      <Flex direction="column" gap={2}>
        <SText variant="h2">Навыки</SText>
        <STag tags={['UX', 'UI', 'Figma']} />
      </Flex>
    </Flex>
  );
}
