import {
  Avatar,
  Text,
  Flex,
  Box,
  Stack,
  Heading,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useGetSkillsByIds, useGetSpecs } from '~/entities/storage';

import type { GetUserResponse } from '~/shared/api';
import { useAuth, useIsMobile } from '~/shared/hooks';
import { STag } from '~/shared/ui/STag';

import { useGetAvatar, useIsAvatarExist, useUserSkills, useUserStatistic } from '../api';

import { Statistic } from './statistic';

interface ProfileCardProps {
  user: GetUserResponse;
}

export function ProfileCardUserDesktop({ user }: ProfileCardProps) {
  const { data: avatar } = useGetAvatar(user.id);
  const { data: statistic } = useUserStatistic(user.id);
  const { data: userSkills } = useUserSkills(user.id);
  const { data: skills, isLoading: skillsLoaded } = useGetSkillsByIds(userSkills);

  const [mainSpecialization, setMainSpecialization] = useState<string | null>(null);
  const [secondarySpecialization, setSecondarySpecialization] = useState<string | null>(
    null,
  );

  const { data: specs } = useGetSpecs();

  useEffect(() => {
    if (!specs?.length) return;

    setMainSpecialization(
      specs.find((spec) => spec.id === user.main_specialization_id)?.name ?? null,
    );
    setSecondarySpecialization(
      specs.find((spec) => spec.id === user.secondary_specialization_id)?.name ?? null,
    );
  }, [specs, user.main_specialization_id, user.secondary_specialization_id]);

  const name = `${user.first_name} ${user.last_name}`;

  const isMobile = useIsMobile();
  const dummyFillProfile = 60;

  return (
    <Flex gap={6}>
      <Flex
        alignItems="flex-start"
        bg="white"
        w="100%"
        borderRadius="2xl"
        mb={10}
        p={isMobile ? 2 : 10}
        gap={6}
      >
        <Stack gap="2.5">
          <Avatar name={name} src={avatar} variant="profileAvatar" />
          <Text align="center" fontWeight="bold" fontSize="xl">
            {name}
          </Text>
        </Stack>
        <Flex direction="column" width="inherit">
          <Statistic mb={6} statistic={statistic} />
          <Flex direction="column" mb={6}>
            <Heading variant="h2" mb={3}>
              Специализация и навыки
            </Heading>
            {mainSpecialization && !secondarySpecialization && (
              <STag mainTags={[mainSpecialization]} tags={skills?.map((s) => s.label)} />
            )}
            {mainSpecialization && secondarySpecialization && (
              <STag
                mainTags={[mainSpecialization, secondarySpecialization]}
                tags={skills?.map((s) => s.label)}
              />
            )}
          </Flex>
          <Box>
            <Heading variant="h2" mb={3}>
              Обо мне
            </Heading>
            <Text>{user.about}</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        p={4}
        bg="white"
        alignItems="center"
        height="fit-content"
        borderRadius="2xl"
        textAlign="center"
        gap={0}
      >
        <Heading as="h3" variant="h3" mb={4}>
          Профиль заполнен
        </Heading>
        <CircularProgress
          value={dummyFillProfile}
          size={32}
          color="purple.600"
          thickness="1rem"
          capIsRound
          mb={4}
        >
          <CircularProgressLabel fontSize="2xl" color="purple.600" fontWeight="600">
            {dummyFillProfile}%
          </CircularProgressLabel>
        </CircularProgress>
        <Text textAlign="center" variant="caption">
          Данные профиля влияют на выдачу актуальных проектов
        </Text>
      </Flex>
    </Flex>
  );
}
