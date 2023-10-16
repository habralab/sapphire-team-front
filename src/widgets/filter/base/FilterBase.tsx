import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  IconButton,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';

import { SpecializationSelector } from '~/features/project';

import { useFilterStore } from '~/shared/store';

export const FilterBase = () => {
  const isFilterOpen = useFilterStore((state) => state.isFilterOpen);

  const setFilterStatus = useFilterStore((state) => state.setFilterStatus);
  const setSkillsSelector = useFilterStore((state) => state.setSkillsSelector);
  return (
    <>
      {isFilterOpen && (
        <Stack
          position="fixed"
          top="0"
          left="0"
          w="100%"
          h="100%"
          background="gray.100"
          zIndex="2"
          px={5}
          py={2}
        >
          <Flex alignItems="center">
            <CloseButton onClick={setFilterStatus} />
            <Heading variant="h2" mb={0}>
              Фильтры
            </Heading>
            <Button
              variant="unstyled"
              fontSize="xs"
              fontWeight="500"
              color="purple.600"
              ml="auto"
            >
              Сбросить
            </Button>
          </Flex>
          <Stack>
            <Stack>
              <Heading variant="h2">Специализация</Heading>
              <Input placeholder="large size" onClick={setSkillsSelector} />
              <SpecializationSelector />
            </Stack>
            <Stack>
              <Heading variant="h2">Профессиональные навыки</Heading>
            </Stack>
            <Stack>
              <Heading variant="h2">Дата начала проекта</Heading>
            </Stack>
          </Stack>
          <Button fontSize="sm" fontWeight="600" mt="auto" mb={4}>
            Показать 43 проекта
          </Button>
        </Stack>
      )}
    </>
  );
};
