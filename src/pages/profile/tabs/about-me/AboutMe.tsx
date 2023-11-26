import { Box, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useGetSkillsByIds, useGetSpecs } from '~/entities/storage';
import { useProfile, useUserSkills } from '~/entities/user';

import { STag } from '~/shared/ui/STag';

interface AboutMeTabProps {
  userId: string;
}

export function AboutMeTab({ userId }: AboutMeTabProps) {
  const [mainSpecialization, setMainSpecialization] = useState<string | null>(null);
  const [secondarySpecialization, setSecondarySpecialization] = useState<string | null>(
    null,
  );

  const { data: user } = useProfile(userId);
  const { data: userSkills } = useUserSkills(userId);
  const { data: skills } = useGetSkillsByIds(userSkills);
  const { data: specs } = useGetSpecs();

  useEffect(() => {
    if (!specs?.length) return;

    setMainSpecialization(
      specs.find((spec) => spec.id === user?.main_specialization_id)?.name ?? null,
    );
    setSecondarySpecialization(
      specs.find((spec) => spec.id === user?.secondary_specialization_id)?.name ?? null,
    );
  }, [specs, user?.main_specialization_id, user?.secondary_specialization_id]);

  if (
    user?.about ||
    user?.main_specialization_id ||
    user?.secondary_specialization_id ||
    userSkills?.length
  ) {
    return (
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
        {skills?.length && (
          <Box>
            <Heading variant="h2">Навыки</Heading>
            <STag tags={skills.map((s) => s.label)} />
          </Box>
        )}
      </Stack>
    );
  }

  return (
    <Text color="gray.700" textAlign="center">
      Заполните информацию о себе
    </Text>
  );
}
