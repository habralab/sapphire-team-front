import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react';

import { SkillsSelector, SpecializationSelector } from '~/features/project';

import {
  useFilterStore,
  useSkillsFilterStore,
  useSpecsFilterStore,
} from '~/shared/store';

export const FilterBase = () => {
  const setFilterStatus = useFilterStore((state) => state.setFilterStatus);
  const setVisibleSpecsSelector = useSpecsFilterStore(
    (state) => state.setVisibleSpecsSelector,
  );
  const setVisibleSkillsSelector = useSkillsFilterStore(
    (state) => state.setVisibleSkillsSelector,
  );

  const isSpecsSelectorOpen = useSpecsFilterStore((state) => state.isSpecsSelectorOpen);
  const isSkillsSelectorOpen = useSkillsFilterStore(
    (state) => state.isSkillsSelectorOpen,
  );
  return (
    <Stack h="100%" background="gray.100" px={5} py={2}>
      <Flex alignItems="center" mb={8}>
        <CloseButton
          onClick={() => {
            setFilterStatus(false);
          }}
        />
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
        <Stack gap={0} mb={8}>
          <Heading variant="h2" mb={3}>
            Специализация
          </Heading>
          <InputGroup>
            <Input
              bg="white"
              borderRadius="full"
              fontSize="sm"
              readOnly
              placeholder="Например, Фронтенд разработчик"
              onClick={() => {
                setVisibleSpecsSelector(true);
              }}
            />
            <InputRightElement>
              <ChevronDownIcon mr={4} />
            </InputRightElement>
          </InputGroup>
          <Drawer
            isOpen={isSpecsSelectorOpen}
            onClose={() => {
              setVisibleSpecsSelector(false);
            }}
            size="full"
            placement="bottom"
          >
            <DrawerContent borderTopRadius="2xl">
              <SpecializationSelector />
            </DrawerContent>
          </Drawer>
          <HStack spacing={4}>
            <Tag
              size="sm"
              bg="gray.300"
              py={1}
              px={2}
              borderRadius="lg"
              fontWeight="medium"
            >
              <TagLabel>Green</TagLabel>
              <TagCloseButton />
            </Tag>
          </HStack>
        </Stack>
        <Stack gap={0} mb={8}>
          <Heading variant="h2" mb={3}>
            Профессиональные навыки
          </Heading>
          <InputGroup>
            <Input
              bg="white"
              borderRadius="full"
              fontSize="sm"
              readOnly
              placeholder="Например, Python"
              onClick={() => {
                setVisibleSkillsSelector(true);
              }}
            />
            <InputRightElement>
              <ChevronDownIcon mr={4} />
            </InputRightElement>
          </InputGroup>
          <Drawer
            isOpen={isSkillsSelectorOpen}
            onClose={() => {
              setVisibleSkillsSelector(false);
            }}
            placement="bottom"
            size="full"
          >
            <DrawerContent borderTopRadius="2xl">
              <SkillsSelector />
            </DrawerContent>
          </Drawer>
        </Stack>
        <Stack>
          <Heading variant="h2">Дата начала проекта</Heading>
          <Input
            bg="white"
            borderRadius="full"
            fontSize="sm"
            color="gray.500"
            placeholder="Select Date and Time"
            size="md"
            type="date"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </Stack>
      </Stack>
      <Button fontSize="sm" fontWeight="600" mt="auto" mb={4}>
        Показать 43 проекта
      </Button>
    </Stack>
  );
};
