import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useApi, useAuth } from '~/shared/hooks';
import { STag } from '~/shared/ui/STag';

const defaultAbout = `Привет! Меня зовут Дима, и я джуниор Frontend-разработчик, готовый изучать новые
технологии из мира Web-разработки и применять их на практике в новых проектах.`;

interface AboutMeType {
  about: string | null;
  main_specialization_id: string | null;
  secondary_specialization_id: string | null;
}

export function AboutMe() {
  const { userApi } = useApi();
  const { userId } = useAuth();
  const [user, setUser] = useState<AboutMeType>();

  useEffect(() => {
    if (userId)
      userApi
        .getUser(userId)
        .then((res) => {
          setUser({
            about: res.about ?? defaultAbout,
            main_specialization_id: res.main_specialization_id,
            secondary_specialization_id: res.secondary_specialization_id,
          });
        })
        .catch(() => {
          setUser({
            about: defaultAbout,
            main_specialization_id: null,
            secondary_specialization_id: null,
          });
        });
  }, [userId]);

  return (
    <Stack bg="white" borderRadius="2xl" p={5} gap={6}>
      <Box>
        <Heading variant="h2">Обо мне</Heading>
        <Text>{user?.about ?? defaultAbout}</Text>
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
