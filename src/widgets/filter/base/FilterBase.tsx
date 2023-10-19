import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';

import { SkillsSelector, SpecializationSelector } from '~/features/project';

import { SkillsBages, SpecializationBages } from '~/entities/filter';

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

  const saveSpecs = useSpecsFilterStore((state) => state.saveSpecs);
  const saveSkills = useSkillsFilterStore((state) => state.saveSkills);

  const specs = useSpecsFilterStore((state) => state.specs);
  const skills = useSkillsFilterStore((state) => state.skills);

  const resetSpecs = useSpecsFilterStore((state) => state.resetSpecs);
  const resetSkills = useSkillsFilterStore((state) => state.resetSkills);

  const handleDeleteSkill = (skill: string) => {
    const newSkills = [...skills];
    const index = newSkills.findIndex((selector) => selector.name === skill);
    newSkills[index].state = false;
    saveSkills(newSkills);
  };

  const handleDeleteSpec = (title: string, spec: string) => {
    const indexTitle = specs.findIndex((selector) => selector.title === title);
    const index = specs[indexTitle].child.findIndex((selector) => selector.name === spec);
    const newSpecs = [...specs];
    newSpecs[indexTitle].child[index] = {
      ...newSpecs[indexTitle].child[index],
      state: !newSpecs[indexTitle].child[index].state,
    };
    saveSpecs(newSpecs);
  };
  return (
    <Stack h="100%" background="gray.100" px={5} py={2}>
      <Flex alignItems="center" mb={4}>
        <CloseButton
          onClick={() => {
            setFilterStatus(false);
          }}
        />
        <Heading variant="h2" mb={0}>
          Фильтры
        </Heading>
        <Button
          onClick={() => {
            resetSpecs();
            resetSkills();
          }}
          variant="unstyled"
          fontSize="xs"
          fontWeight="500"
          color="purple.600"
          ml="auto"
        >
          Сбросить
        </Button>
      </Flex>
      <Stack overflow="auto" mb={4}>
        <Stack gap={0} mb={8}>
          <Heading variant="h2" mb={3}>
            Специализация
          </Heading>
          <InputGroup mb={3}>
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
          <SpecializationBages delete={handleDeleteSpec} />
        </Stack>
        <Stack gap={0} mb={8}>
          <Heading variant="h2" mb={3}>
            Профессиональные навыки
          </Heading>
          <InputGroup mb={3}>
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
          <SkillsBages delete={handleDeleteSkill} />
        </Stack>
        <Stack>
          <Heading variant="h2">Дата начала проекта</Heading>
          <Input
            variant="filled"
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
      <Button
        onClick={() => {
          setFilterStatus(false);
        }}
        fontSize="sm"
        fontWeight="600"
        mt="auto"
        mb={4}
      >
        Показать 43 проекта
      </Button>
    </Stack>
  );
};
