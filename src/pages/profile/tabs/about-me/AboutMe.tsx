import { Box, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useGetSkillsByIds, useGetSpecs } from '~/entities/storage';
import { useGetProfile, useUserSkills } from '~/entities/user';

import { useAuth } from '~/shared/hooks';
import { STag } from '~/shared/ui/STag';

interface AboutMeTabProps {
  userId: string;
}

export function AboutMeTab({ userId }: AboutMeTabProps) {
  const { userId: id } = useAuth();
  const [mainSpecialization, setMainSpecialization] = useState<string | null>(null);
  const [secondarySpecialization, setSecondarySpecialization] = useState<string | null>(
    null,
  );

  const { data: user, isLoading: userLoaded } = useGetProfile(userId);
  const { data: userSkills } = useUserSkills(userId);
  const { data: skills, isLoading: skillsLoaded } = useGetSkillsByIds(userSkills);
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
      <>
        {userLoaded && skillsLoaded ? (
          <Skeleton height="200px" borderRadius="2xl" />
        ) : (
          <Stack bg="white" borderRadius="2xl" p={5} gap={6}>
            {user?.about && (
              <Box>
                <Heading variant="h2">Обо мне</Heading>
                {user.about.split('\n').map((text, index) => (
                  <Text key={index}>
                    {text}
                    <br />
                  </Text>
                ))}
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
        )}
      </>
    );
  } else {
    return (
      <Text color="gray.700" textAlign="center">
        {userId === id
          ? 'Заполните информацию о себе'
          : 'Пользователь не заполнил информацию о себе'}
      </Text>
    );
  }
}
