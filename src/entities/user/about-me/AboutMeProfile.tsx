/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { Box, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useApi } from '~/shared/hooks';
import { STag } from '~/shared/ui/STag';

import { useProfile, useSkills, useSkillsGroup } from '../api';

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
  const { data: userSkills } = useSkills(userId);
  const { data: skills } = useSkillsGroup(userSkills ?? []);

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

  return user?.about ||
    user?.main_specialization_id ||
    user?.secondary_specialization_id ||
    userSkills ? (
    <Stack bg="white" borderRadius="2xl" p={5} gap={6}>
      {user?.about && (
        <Box>
          <Heading variant="h2">Обо мне</Heading>
          <Text>{user.about}</Text>
        </Box>
      )}
      {mainSpecialization && (
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
      )}
      {skills && (
        <Box>
          <Heading variant="h2">Навыки</Heading>
          <STag tags={skills.map((s) => s.label)} />
        </Box>
      )}
    </Stack>
  ) : (
    <Text color="gray.700" textAlign="center">
      Заполните информацию о себе
    </Text>
  );
}
