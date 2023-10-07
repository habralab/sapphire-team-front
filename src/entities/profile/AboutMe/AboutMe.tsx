import { Box, Text, Flex, Heading, VStack } from '@chakra-ui/react';

import { TagComponent } from '~/shared/ui/Tag';

export function AboutMe() {
  return (
    <Box position="absolute" left="0" right="0" bg="white" borderRadius="2xl" p={4}>
      <Heading fontSize="sm" fontWeight="semibold">
        Обо мне
      </Heading>
      <Text py={2} lineHeight="16px">
        Привет! Меня зовут Татьяна, и я начинающий UX/UI дизайнер, готовый погрузиться в
        мир творчества и пользовательских интерфейсов.
        <br />
        Моя страсть к дизайну началась давно, и я горжусь тем, что обладаю креативным
        мышлением и аналитическими способностями.
      </Text>
      <Heading fontSize="sm">Профессия</Heading>
      <Flex wrap="wrap" gap={2} py={2} fontWeight="semibold">
        <TagComponent title="Дизайнер" />
        <TagComponent title="UX/UI дизайнер" />
        <TagComponent title="Product дизайнер" />
      </Flex>
      <Heading fontSize="sm" py={2}>
        Навыки
      </Heading>
      <Flex wrap="wrap" gap={2} fontWeight="semibold">
        <TagComponent title="UX" />
        <TagComponent title="UI" />
      </Flex>
    </Box>
  );
}
