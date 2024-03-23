import {
  Accordion,
  Box,
  Button,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import type { GetSpecGroupsDataResponse, GetSpecsDataResponse } from '~/shared/api';
import { useIsMobile } from '~/shared/hooks';
import { SearchInput } from '~/shared/ui/SearchInput';

import { GroupItem } from './GroupItem';

interface FilterSpecializationModalProps {
  isOpen: boolean;
  onClose: () => void;
  state?: GetSpecsDataResponse;
  stateGroup?: GetSpecGroupsDataResponse;
  resetSpec: () => void;
  userFilter: string[];
  saveSpec: (spec: string[]) => void;
  searchText: string;
  setSearchText: (text: string) => void;
  singleChecked?: boolean;
  doubleChecked?: boolean;
}

export const FilterSpecializationModal = (props: FilterSpecializationModalProps) => {
  const {
    isOpen,
    onClose,
    state,
    stateGroup,
    resetSpec,
    saveSpec,
    userFilter,
    singleChecked,
    doubleChecked,
    searchText,
    setSearchText,
  } = props;

  const searchRef = useRef<HTMLInputElement>(null);

  const [filteredGroupsState, setFilteredGroupsState] =
    useState<GetSpecGroupsDataResponse>([]);
  const [filteredState, setFilteredState] = useState<GetSpecsDataResponse>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (state && stateGroup) {
      const visibleSpecsGroupsIds = state.map(({ group_id }) => group_id);
      const visibleSpecsGroups = stateGroup.filter(({ id }) =>
        visibleSpecsGroupsIds.includes(id),
      );
      const activeCheckbox = state.filter(({ id }) => userFilter.includes(id));
      const inactiveCheckbox = state.filter(({ id }) => !userFilter.includes(id));

      const activeSectionTitles = activeCheckbox.map(({ group_id }) => group_id);

      const activeSections = visibleSpecsGroups.filter(({ id }) =>
        activeSectionTitles.includes(id),
      );
      const inactiveSections = visibleSpecsGroups.filter(
        ({ id }) => !activeSectionTitles.includes(id),
      );

      setFilteredGroupsState([...activeSections, ...inactiveSections]);
      setFilteredState([...activeCheckbox, ...inactiveCheckbox]);
    }
  }, [isOpen, state]);

  const getMainFilterSpecsBody = () => (
    <>
      <Container maxW="md">
        <Box bg="bg" position="sticky" top="0" zIndex={1} pt={3} pb={4}>
          <Flex justifyContent="space-between" mb={3}>
            <Flex alignItems="center">
              <IconButton
                onClick={() => {
                  onClose();
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
              setSearchText(value);
            }}
            value={searchText}
          />
        </Box>

        <Accordion allowToggle bg="white" borderRadius="2xl">
          {filteredGroupsState.map((group) => (
            <GroupItem
              key={group.id}
              id={group.id}
              name={group.name}
              allSpecs={filteredState}
              tempSpec={userFilter}
              singleChecked={singleChecked}
              doubleChecked={doubleChecked}
            />
          ))}
        </Accordion>
      </Container>
      <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
        {filteredGroupsState.length > 0 && (
          <Button
            onClick={() => {
              saveSpec(userFilter);
              onClose();
              setSearchText('');
            }}
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            Применить
          </Button>
        )}
      </Container>
    </>
  );

  return isMobile ? (
    <Modal
      onClose={() => {
        onClose();
        setSearchText('');
      }}
      size="full"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent bg="bg">{getMainFilterSpecsBody()}</ModalContent>
    </Modal>
  ) : (
    <Drawer
      onClose={() => {
        onClose();
        setSearchText('');
      }}
      placement="right"
      isOpen={isOpen}
      size="sm"
    >
      <DrawerOverlay bg="transparent" />
      <DrawerContent bg="bg">{getMainFilterSpecsBody()}</DrawerContent>
    </Drawer>
  );
};
