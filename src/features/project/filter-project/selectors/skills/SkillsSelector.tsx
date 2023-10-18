import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { Selector, useSkillsFilterStore } from '~/shared/store';
import { InputProps, SearchInput } from '~/shared/ui/SearchInput';

export const SkillsSelector = () => {
  const isSkillsSelectorOpen = useSkillsFilterStore(
    (state) => state.isSkillsSelectorOpen,
  );
  const setVisibleSkillsSelector = useSkillsFilterStore(
    (state) => state.setVisibleSkillsSelector,
  );
  const resetSkills = useSkillsFilterStore((state) => state.resetSkills);
  const saveSkills = useSkillsFilterStore((state) => state.saveSkills);
  const dummySelectors = useSkillsFilterStore((state) => state.skills);

  const [skillSelector, setSkillSelectors] = useState<Selector[]>([]);

  useEffect(() => {
    setSkillSelectors([...dummySelectors]);
  }, [dummySelectors, isSkillsSelectorOpen]);

  const handleSetSkill = (skill: string) => {
    const newSkills = [...skillSelector];
    const index = newSkills.findIndex((selector) => selector.name === skill);
    newSkills[index].state = !newSkills[index].state;
    setSkillSelectors([...newSkills]);
    console.log(`newSkills`);
    console.log(newSkills);
    console.log('dummySelectors');
    console.log(dummySelectors);
  };

  const handleSumbit = (value: InputProps) => {
    console.log(value);
  };
  return (
    <Stack h="100%" px={5} py={2}>
      <Flex alignItems="center" gap={2}>
        <IconButton
          onClick={() => {
            setVisibleSkillsSelector(false);
          }}
          variant="ghost"
          aria-label="Close"
          minW="fit-content"
          icon={<Icon as={FiChevronLeft} w={5} h={5} />}
        />
        <Heading variant="h2" mb={0}>
          Навыки
        </Heading>
        <Button
          onClick={() => {
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
      <SearchInput
        placeholder="Найти навыки"
        onSubmit={handleSumbit}
        inputColor="gray.100"
      />
      <Stack overflow="auto" gap={6} mt={4} mb={4}>
        {skillSelector.map((selector) => (
          <Checkbox
            key={selector.name}
            onChange={(e) => {
              handleSetSkill(e.target.value);
            }}
            colorScheme="purple"
            isChecked={selector.state}
            value={selector.name}
          >
            <Text fontSize="sm">{selector.name}</Text>
          </Checkbox>
        ))}
      </Stack>
      <Button
        onClick={() => {
          saveSkills(skillSelector);
          setVisibleSkillsSelector(false);
        }}
        fontSize="sm"
        fontWeight="normal"
        mt="auto"
        mb={4}
        p={6}
      >
        Применить
      </Button>
    </Stack>
  );
};
