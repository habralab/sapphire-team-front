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
  Text,
} from '@chakra-ui/react';
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
    const activeSections = state.filter(
      ({ child }) => activeNestedCheckboxes(child).length > 0,
    );
    const inactiveSections = state.filter(
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
      <ModalContent bg="bg">
        <Container maxW="md">
          <Box bg="bg" position="sticky" top="0" zIndex={1} pt={3} pb={4}>
            <Flex justifyContent="space-between" mb={3}>
              <Flex alignItems="center">
                <IconButton
                  onClick={() => {
                    changeVisible(false);
                  }}
                  variant="ghost"
                  aria-label="Close"
                  minW="fit-content"
                  mr={2}
                  icon={<Icon as={FiChevronLeft} fontSize="2xl" />}
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
          </Box>
          <Accordion allowMultiple bg="white" borderRadius="2xl">
            <CheckboxGroup variant="black" colorScheme="purple" value={selectCheckboxes}>
              {filteredState.map((spec) => (
                <AccordionItem key={spec.id}>
                  <AccordionButton justifyContent="space-between">
                    <Flex gap={2} fontSize="sm" textAlign="left">
                      <Heading fontSize="md" fontWeight="medium">
                        {spec.title}
                      </Heading>
                      {activeNestedCheckboxes(spec.child).length > 0 && (
                        <Counter count={activeNestedCheckboxes(spec.child).length} />
                      )}
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={3}>
                    {spec.child.map((selector) => (
                      <Checkbox
                        key={selector.id}
                        onChange={handleCheckbox}
                        p={4}
                        w="full"
                        py={2}
                        value={selector.id}
                      >
                        <Text fontWeight="medium" fontSize="sm">
                          {selector.name}
                        </Text>
                      </Checkbox>
                    ))}
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
