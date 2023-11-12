import { Box, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useApi } from '~/shared/hooks';
import { STag } from '~/shared/ui/STag';

import { useProfile } from './api';

const defaultAbout = `Требуется заполнить данный раздел`;

interface AboutMeProfileProps {
  userId: string;
}

export function AboutMeProfile({ userId }: AboutMeProfileProps) {
  const { storageApi } = useApi();
  const [mainSpecialization, setMainSpecialization] = useState<string | null>(null);
  const [secondarySpecialization, setSecondarySpecialization] = useState<string | null>(
    null,
  );

  const { data: user } = useProfile(userId);

  useEffect(() => {
    storageApi
      .getSpecs()
      .then((res) => {
        setMainSpecialization(
          res.data.filter((spec) => spec.id === user?.main_specialization_id)[0].name,
        );
        setSecondarySpecialization(
          res.data.filter((spec) => spec.id === user?.secondary_specialization_id)[0]
            .name,
        );
      })
      .catch(() => {
        setMainSpecialization(null);
        setSecondarySpecialization(null);
      });
  }, [user]);

  return (
    <Stack bg="white" borderRadius="2xl" p={5} gap={6}>
      <Box>
        <Heading variant="h2">Обо мне</Heading>
        <Text>{user?.about ? user.about : defaultAbout}</Text>
      </Box>
      <Box>
        <Heading variant="h2">Специализация</Heading>
        {mainSpecialization && secondarySpecialization ? (
          <STag mainTags={[mainSpecialization, secondarySpecialization]} />
        ) : mainSpecialization ? (
          <STag mainTags={[mainSpecialization]} />
        ) : (
          <Stack spacing={0} gap={2}>
            <Skeleton h={5} />
            <Skeleton h={5} />
          </Stack>
        )}
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
