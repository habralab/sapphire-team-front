import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { SpecsSelector, useSpecsFilterStore } from '~/shared/store';
import { InputProps, SearchInput } from '~/shared/ui/SearchInput';

export const SpecializationSelector = () => {
  const isSpecsSelectorOpen = useSpecsFilterStore((state) => state.isSpecsSelectorOpen);
  const setVisibleSpecsSelector = useSpecsFilterStore(
    (state) => state.setVisibleSpecsSelector,
  );
  const resetSpecs = useSpecsFilterStore((state) => state.resetSpecs);
  const saveSpecs = useSpecsFilterStore((state) => state.saveSpecs);
  const dummySelectors = useSpecsFilterStore((state) => state.specs);

  const [allSelectors, setDummySelectors] = useState<SpecsSelector[]>([]);

  useEffect(() => {
    setDummySelectors(_.cloneDeep(dummySelectors));
  }, [dummySelectors, isSpecsSelectorOpen]);

  const handleSetCheckbox = (title: string, spec: string) => {
    const indTitle = allSelectors.findIndex((selector) => selector.title === title);
    const indSpec = allSelectors[indTitle].child.findIndex(
      (selector) => selector.name === spec,
    );
    allSelectors[indTitle].child[indSpec] = {
      ...allSelectors[indTitle].child[indSpec],
      state: !allSelectors[indTitle].child[indSpec].state,
    };
    setDummySelectors([...allSelectors]);
  };

  const handleSumbit = (value: InputProps) => {
    console.log(value);
  };
  return (
    <Stack h="100%" px={5} py={2}>
      <Flex alignItems="center" gap={2}>
        <IconButton
          onClick={() => {
            setVisibleSpecsSelector(false);
          }}
          variant="ghost"
          aria-label="Close"
          minW="fit-content"
          icon={<Icon as={FiChevronLeft} w={5} h={5} />}
        />
        <Heading variant="h2" mb={0}>
          Специализация
        </Heading>
        <Button
          onClick={resetSpecs}
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
        placeholder="Найти специализацию"
        onSubmit={handleSumbit}
        inputColor="gray.100"
      />
      <Accordion allowToggle overflow="auto" mt={4} mb={4}>
        {allSelectors.map((spec, i) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="sm" fontWeight="500">
                  {spec.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={3}>
              <Stack overflow="auto" gap={6}>
                {spec.child.map((selector) => (
                  <Checkbox
                    key={selector.name}
                    onChange={(e) => {
                      handleSetCheckbox(spec.title, e.target.value);
                    }}
                    colorScheme="purple"
                    variant="black"
                    isChecked={selector.state}
                    value={selector.name}
                  >
                    <Text fontSize="sm">{selector.name}</Text>
                  </Checkbox>
                ))}
              </Stack>
            </AccordionPanel>
            <Divider width="90%" ml="auto" mr="auto" />
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        onClick={() => {
          saveSpecs(allSelectors);
          setVisibleSpecsSelector(false);
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
