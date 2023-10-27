import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { Counter } from '~/shared/ui/Counter';
import { SearchInput } from '~/shared/ui/SearchInput';

interface Selector {
  name: string;
  id: number;
}

interface SpecsSelector {
  id: number;
  title: string;
  child: Selector[];
}

interface FilterSpecializationProps {
  isVisible: boolean;
  changeVisible: (status: boolean) => void;
  state: SpecsSelector[];
  resetSpec: () => void;
  userFilter: number[];
  saveSpec: (spec: number[]) => void;
}

export const FilterSpecialization = (props: FilterSpecializationProps) => {
  const { isVisible, changeVisible, state, resetSpec, saveSpec, userFilter } = props;
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const [filteredState, setFilteredState] = useState<SpecsSelector[]>([]);
  const [selectCheckboxes, setSelectCheckboxes] = useState<number[]>([]);

  const activeNestedCheckboxes = (state: Selector[]) =>
    state.filter((selector) => selectCheckboxes.includes(selector.id));

  useEffect(() => {
    setSelectCheckboxes([...userFilter]);
  }, [userFilter, isVisible]);

  useEffect(() => {
    const copyState = _.cloneDeep(state);
    const activeSections = copyState.filter(
      ({ child }) => activeNestedCheckboxes(child).length > 0,
    );
    const inactiveSections = copyState.filter(
      ({ child }) => activeNestedCheckboxes(child).length === 0,
    );
    activeSections.forEach((section) => {
      const activeCheckbox = section.child.filter(({ id }) =>
        selectCheckboxes.includes(id),
      );
      const inactiveCheckbox = section.child.filter(
        ({ id }) => !selectCheckboxes.includes(id),
      );
      section.child = [...activeCheckbox, ...inactiveCheckbox];
    });

    setFilteredState([...activeSections, ...inactiveSections]);
  }, [isVisible]);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.value);
    if (selectCheckboxes.includes(id)) {
      setSelectCheckboxes(selectCheckboxes.filter((item) => item !== id));
      return;
    }
    setSelectCheckboxes([...selectCheckboxes, id]);
  };

  return (
    <Modal
      onClose={() => {
        changeVisible(false);
      }}
      size="full"
      isOpen={isVisible}
    >
      <ModalOverlay />
      <ModalContent bg="bg" display="flex" alignItems="center" borderTopRadius="2xl">
        <Container maxW="md" flex="1">
          <Container bg="bg" position="sticky" top="0" zIndex={3} p={0} pt={3} pb={2}>
            <Flex alignItems="center" justifyContent="space-between" mb={3}>
              <Flex alignItems="center">
                <IconButton
                  onClick={() => {
                    changeVisible(false);
                  }}
                  variant="ghost"
                  aria-label="Close"
                  minW="fit-content"
                  mr={2}
                  icon={<Icon as={FiChevronLeft} w={5} h={5} />}
                />
                <Heading variant="h2" mb={0}>
                  Специализация
                </Heading>
              </Flex>
              <Button
                onClick={resetSpec}
                variant="flat"
                fontSize="sm"
                fontWeight="500"
                colorScheme="purple"
              >
                Сбросить
              </Button>
            </Flex>
            <SearchInput
              ref={searchRef}
              placeholder="Найти специальность"
              onChange={(value) => {
                setSearch(value);
              }}
              value={search}
            />
          </Container>
          <Accordion allowMultiple mb={3} bg="white" borderRadius="2xl">
            <CheckboxGroup variant="black" colorScheme="purple" value={selectCheckboxes}>
              {filteredState.map((spec) => (
                <AccordionItem key={spec.id} mb={2}>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize="sm"
                        fontWeight="500"
                      >
                        {spec.title}
                      </Box>
                      <Counter count={activeNestedCheckboxes(spec.child).length} />
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3}>
                    <Stack gap={0}>
                      {spec.child.map((selector) => (
                        <Checkbox
                          key={selector.id}
                          onChange={handleCheckbox}
                          p={4}
                          w="full"
                          py={2}
                          value={selector.id}
                        >
                          <Text fontSize="sm">{selector.name}</Text>
                        </Checkbox>
                      ))}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </CheckboxGroup>
          </Accordion>
        </Container>
        <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
          <Button
            onClick={() => {
              saveSpec(selectCheckboxes);
              changeVisible(false);
            }}
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            Применить
          </Button>
        </Container>
      </ModalContent>
    </Modal>
  );
};
