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
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { GetSpecGroupsDataResponse, GetSpecsDataResponse } from '~/shared/api';
import { Counter } from '~/shared/ui/Counter';
import { SearchInput } from '~/shared/ui/SearchInput';

interface FilterSpecializationModalProps {
  isVisible: boolean;
  specGroupLoading: boolean;
  specsLoading: boolean;
  changeVisible: (status: boolean) => void;
  state?: GetSpecsDataResponse;
  stateGroup?: GetSpecGroupsDataResponse;
  resetSpec: () => void;
  userFilter: string[];
  saveSpec: (spec: string[]) => void;
  singleChecked?: boolean;
}

export const FilterSpecializationModal = (props: FilterSpecializationModalProps) => {
  const {
    isVisible,
    changeVisible,
    state,
    stateGroup,
    resetSpec,
    saveSpec,
    userFilter,
    singleChecked,
    specsLoading,
    specGroupLoading,
  } = props;
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const [filteredGroupsState, setFilteredGroupsState] =
    useState<GetSpecGroupsDataResponse>([]);
  const [filteredState, setFilteredState] = useState<GetSpecsDataResponse>([]);
  const [selectCheckboxes, setSelectCheckboxes] = useState<string[]>([]);

  const activeNestedCheckboxes = (group_id: string) =>
    filteredState.filter(
      (selector) =>
        selector.group_id === group_id && selectCheckboxes.includes(selector.id),
    ).length;

  useEffect(() => {
    setSelectCheckboxes([...userFilter]);
  }, [userFilter, isVisible]);

  useEffect(() => {
    if (state && stateGroup) {
      const activeCheckbox = state.filter(({ id }) => selectCheckboxes.includes(id));
      const inactiveCheckbox = state.filter(({ id }) => !selectCheckboxes.includes(id));

      const activeSectionTitles = activeCheckbox.map(({ group_id }) => group_id);

      const activeSections = stateGroup.filter(({ id }) =>
        activeSectionTitles.includes(id),
      );
      const inactiveSections = stateGroup.filter(
        ({ id }) => !activeSectionTitles.includes(id),
      );

      setFilteredGroupsState([...activeSections, ...inactiveSections]);
      setFilteredState([...activeCheckbox, ...inactiveCheckbox]);
    }
  }, [isVisible]);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    if (selectCheckboxes.includes(id)) {
      setSelectCheckboxes(selectCheckboxes.filter((item) => item !== id));
      return;
    }
    if (singleChecked) {
      setSelectCheckboxes([id]);
    } else {
      setSelectCheckboxes([...selectCheckboxes, id]);
    }
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
          {specGroupLoading || specsLoading ? (
            <Skeleton height="550px" borderRadius="2xl" />
          ) : (
            <Accordion allowMultiple bg="white" borderRadius="2xl">
              <CheckboxGroup
                variant="black"
                colorScheme="purple"
                value={selectCheckboxes}
              >
                {filteredGroupsState.map((spec) => (
                  <AccordionItem key={spec.id}>
                    <AccordionButton justifyContent="space-between">
                      <Flex gap={2} fontSize="sm" textAlign="left">
                        <Heading fontSize="md" fontWeight="medium">
                          {spec.name}
                        </Heading>
                        {activeNestedCheckboxes(spec.id) > 0 && (
                          <Counter count={activeNestedCheckboxes(spec.id)} />
                        )}
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={3}>
                      {filteredState.map((selector) => (
                        <React.Fragment key={selector.id}>
                          {selector.group_id === spec.id && (
                            <Checkbox
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
                          )}
                        </React.Fragment>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </CheckboxGroup>
            </Accordion>
          )}
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
