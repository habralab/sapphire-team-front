import { Flex } from '@chakra-ui/react';

import { STag } from '~/shared/ui/STag';
import { SText } from '~/shared/ui/SText';

const testText = `Привет! Меня зовут Татьяна, и я начинающий UX/UI дизайнер, готовый погрузиться в
мир творчества и пользовательских интерфейсов.
Моя страсть к дизайну началась давно, и я горжусь тем, что обладаю креативным
мышлением и аналитическими способностями.`;

const testTagProf = ['Дизайнер', 'UX/UI дизайнер'];
const testTagSkill = ['UX', 'UI', 'Figma'];

export function AboutMe() {
  return (
    <Flex
      direction="column"
      position="absolute"
      left="0"
      right="0"
      bg="white"
      borderRadius="2xl"
      p={4}
      gap={4}
    >
      <Flex direction="column" gap={2}>
        <SText variant="h2">Обо мне</SText>
        <SText variant="info">{testText}</SText>
      </Flex>
      <Flex direction="column" gap={2}>
        <SText variant="h2">Профессия</SText>
        <STag mainTag={testTagProf} />
      </Flex>
      <Flex direction="column" gap={2}>
        <SText variant="h2">Навыки</SText>
        <STag tags={testTagSkill} />
      </Flex>
    </Flex>
  );
}
