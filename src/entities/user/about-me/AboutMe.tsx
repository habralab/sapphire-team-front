import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import { STag } from '~/shared/ui/STag';

export function AboutMe() {
  return (
    <Stack bg="white" borderRadius="2xl" p={5} gap={6}>
      <Box>
        <Heading variant="h2">Обо мне</Heading>
        <Text>
          Привет! Меня зовут Татьяна, и я начинающий UX/UI дизайнер, готовый погрузиться в
          мир творчества и пользовательских интерфейсов. Моя страсть к дизайну началась
          давно, и я горжусь тем, что обладаю креативным мышлением и аналитическими
          способностями.
        </Text>
      </Box>
      <Box>
        <Heading variant="h2">Профессия</Heading>
        <STag mainTags={['Дизайнер', 'UX/UI дизайнер']} />
      </Box>
      <Box>
        <Heading variant="h2">Навыки</Heading>
        <STag tags={['UX', 'UI', 'Figma']} />
      </Box>
    </Stack>
  );
}
