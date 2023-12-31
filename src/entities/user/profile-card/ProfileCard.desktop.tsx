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

import { useIsMobile } from '~/shared/hooks';
import { STag } from '~/shared/ui/STag';

import { Statistic } from './statistic';

export function ProfileCardDesktop() {
  const isMobile = useIsMobile();
  const dummyFillProfile = 60;
  const dymmyMainSkills = ['UX/UI дизайнер', 'Product дизайнер'];
  const dymmySkills = [
    'UX',
    'UI',
    'Figma',
    'Интерфейс',
    'Анимация',
    'Adobe',
    'CJM',
    'JTBD',
    'Lean Canvas',
    'Глубинные интервью',
  ];
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
          <Avatar name="Татьяна А" variant="profileAvatar" />
          <Text align="center" fontWeight="bold" fontSize="xl">
            Татьяна А
          </Text>
        </Stack>
        <Flex direction="column" width="inherit">
          <Statistic mb={6} />
          <Flex direction="column" mb={6}>
            <Heading variant="h2" mb={3}>
              Специализация и навыки
            </Heading>
            <STag mainTags={dymmyMainSkills} tags={dymmySkills} />
          </Flex>
          <Box>
            <Heading variant="h2" mb={3}>
              Обо мне
            </Heading>
            <Text>
              Привет! Меня зовут Татьяна, и я начинающий UX/UI дизайнер, готовый
              погрузиться в мир творчества и пользовательских интерфейсов. Моя страсть к
              дизайну началась давно, и я горжусь тем, что обладаю креативным мышлением и
              аналитическими способностями.
            </Text>
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
