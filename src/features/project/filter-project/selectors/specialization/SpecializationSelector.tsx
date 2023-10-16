import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';

import { useFilterStore } from '~/shared/store';
import { InputProps, SearchInput } from '~/shared/ui/SearchInput';

export const SpecializationSelector = () => {
  const isSkillsSelectorOpen = useFilterStore((state) => state.isSkillsSelectorOpen);
  const setSkillsSelector = useFilterStore((state) => state.setSkillsSelector);
  const setCheckedSkill = useFilterStore((state) => state.setCheckedSkill);
  const dummySelectors = useFilterStore((state) => state.checkedSkills);

  useEffect(() => {
    console.log(dummySelectors);
  }, [dummySelectors]);

  const handleSumbit = (value: InputProps) => {
    console.log(value);
  };
  return (
    <>
      {isSkillsSelectorOpen && (
        <Box
          bg="blackAlpha.500"
          w="100%"
          h="100%"
          position="fixed"
          top="0"
          left="0"
          zIndex="3"
        >
          <Stack
            position="fixed"
            top="0"
            left="0"
            w="100%"
            h="100%"
            background="white"
            zIndex="34"
            px={5}
            py={2}
            borderTopRadius="2xl"
          >
            <Flex alignItems="center" gap={2}>
              <IconButton
                onClick={setSkillsSelector}
                variant="ghost"
                aria-label="Close"
                minW="fit-content"
                icon={<Icon as={FiChevronLeft} w={5} h={5} />}
              />
              <Heading variant="h2" mb={0}>
                Навыки
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
            <SearchInput
              placeholder="Найти навыки"
              onSubmit={handleSumbit}
              inputColor="gray.100"
            />
            <Stack overflow="auto" gap={6} mt={7}>
              {dummySelectors.map((selector) => (
                <Checkbox
                  key={selector.name}
                  onChange={(e) => {
                    setCheckedSkill(e.target.value);
                  }}
                  colorScheme="purple"
                  isChecked={selector.state}
                  value={selector.name}
                >
                  <Text fontSize="sm">{selector.name}</Text>
                </Checkbox>
              ))}
            </Stack>
            <Button fontSize="sm" fontWeight="normal" mt="auto" mb={4} p={6}>
              Применить
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
};
