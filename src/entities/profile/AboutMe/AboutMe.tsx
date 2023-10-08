import { Box, Text, Flex, Heading, VStack } from '@chakra-ui/react';

import { STag } from '~/shared/ui/STag';
import { SText } from '~/shared/ui/SText';

const testText = `Привет! Меня зовут Татьяна, и я начинающий UX/UI дизайнер, готовый погрузиться в
мир творчества и пользовательских интерфейсов.
Моя страсть к дизайну началась давно, и я горжусь тем, что обладаю креативным
мышлением и аналитическими способностями.`;

const testTagProf = ['Дизайнер', 'UX/UI дизайнер', 'Product дизайнер'];
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
        <SText variant="h2" text="Обо мне" />
        <SText text={testText} />
      </Flex>
      <Flex direction="column" gap={2}>
        <SText variant="h2" text="Профессия" />
        <STag tagArr={testTagProf} />
      </Flex>
      <Flex direction="column" gap={2}>
        <SText variant="h2" text="Навыки" />
        <STag tagArr={testTagSkill} />
      </Flex>
    </Flex>
  );
}
