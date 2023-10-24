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
  Divider,
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

import { SearchInput } from '~/shared/ui/SearchInput';

interface Selector {
  name: string;
  state: boolean;
}

interface SpecsSelector {
  title: string;
  child: Selector[];
}

interface FilterSpecializationProps {
  isVisible: boolean;
  changeVisible: (status: boolean) => void;
  state: SpecsSelector[];
  resetSpec: () => void;
}

export const FilterSpecialization = (props: FilterSpecializationProps) => {
  const { isVisible, changeVisible, state, resetSpec } = props;
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const [specSelector, setSpecSelectors] = useState<SpecsSelector[]>([]);

  const getCopyState = (currentState: SpecsSelector[]) => _.cloneDeep(currentState);

  useEffect(() => {
    setSpecSelectors([...getCopyState(state)]);
  }, [state, isVisible]);

  const handleSetCheckbox = (title: string, spec: string) => {
    const indexTitle = specSelector.findIndex((selector) => selector.title === title);
    const index = specSelector[indexTitle].child.findIndex(
      (selector) => selector.name === spec,
    );
    const newSpecs = [...getCopyState(specSelector)];
    newSpecs[indexTitle].child[index] = {
      ...newSpecs[indexTitle].child[index],
      state: !newSpecs[indexTitle].child[index].state,
    };
    setSpecSelectors(newSpecs);
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
      <ModalContent bg="bg" display="flex" alignItems="center">
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
          <Accordion allowToggle mb={4}>
            {specSelector.map((spec, i) => (
              <AccordionItem key={i}>
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
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={3}>
                  <Stack gap={0}>
                    <CheckboxGroup variant="black" colorScheme="purple">
                      {spec.child.map((selector) => (
                        <Checkbox
                          key={selector.name}
                          onChange={(e) => {
                            handleSetCheckbox(spec.title, e.target.value);
                          }}
                          p={4}
                          w="full"
                          py={2}
                          isChecked={selector.state}
                          value={selector.name}
                        >
                          <Text fontSize="sm">{selector.name}</Text>
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </Stack>
                </AccordionPanel>
                <Divider width="90%" ml="auto" mr="auto" borderColor="gray.200" />
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
        <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
          <Button fontSize="sm" fontWeight="600" w="full">
            Применить
          </Button>
        </Container>
      </ModalContent>
    </Modal>
  );
};
