import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import { STag } from '~/shared/ui/STag';

export function AboutMe() {
  return (
    <Stack bg="white" borderRadius="2xl" p={5} gap={6}>
      <Box>
        <Heading variant="h2">Обо мне</Heading>
        <Text>
          Привет! Меня зовут Дима, и я джуниор Frontend-разработчик, готовый изучать новые
          технологии из мира Web-разработки и применять их на практике в новых проектах.
        </Text>
      </Box>
      <Box>
        <Heading variant="h2">Профессия</Heading>
        <STag mainTags={['Разработчик', 'Frontend разработчик']} />
      </Box>
      <Box>
        <Heading variant="h2">Навыки</Heading>
        <STag
          tags={[
            'TypeScript',
            'JavaScript',
            'React',
            'Vue',
            'Angular',
            'Redux',
            'Node JS',
            'SCSS',
            'Bootstrap',
            'Tailwind',
          ]}
        />
      </Box>
    </Stack>
  );
}
