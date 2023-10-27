import {
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

export interface Selector {
  name: string;
  id: number;
}

interface FilterSkillProps {
  isVisible: boolean;
  changeVisible: (status: boolean) => void;
  state: Selector[];
  resetSkill: () => void;
  userFilter: number[];
  saveSkill: (spec: number[]) => void;
}

export const FilterSkill = (props: FilterSkillProps) => {
  const { isVisible, changeVisible, state, resetSkill, saveSkill, userFilter } = props;
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const [filteredState, setFilteredState] = useState<Selector[]>([]);
  const [selectCheckboxes, setSelectCheckboxes] = useState<number[]>([]);

  console.log(selectCheckboxes);

  useEffect(() => {
    setSelectCheckboxes([...userFilter]);
  }, [userFilter, isVisible]);

  useEffect(() => {
    const copyState = [...state];
    const activeCheckbox = copyState.filter(({ id }) => selectCheckboxes.includes(id));
    const inactiveCheckbox = copyState.filter(({ id }) => !selectCheckboxes.includes(id));
    setFilteredState([...activeCheckbox, ...inactiveCheckbox]);
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
        <Container maxW="md" flex="1" px={5}>
          <Container bg="bg" position="sticky" top="0" zIndex={3} p={0} pt={3} pb={5}>
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
                  Навыки
                </Heading>
              </Flex>
              <Button
                onClick={resetSkill}
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
              placeholder="Найти профессиональные навыки"
              onChange={(value) => {
                setSearch(value);
              }}
              value={search}
            />
          </Container>
          <Stack bg="white" p={4} borderRadius="2xl" gap={0}>
            <CheckboxGroup variant="black" colorScheme="purple" value={selectCheckboxes}>
              {filteredState.map((selector, i, arr) => {
                const lastElement = arr.length - 1 === i;
                return (
                  <>
                    <Checkbox
                      colorScheme="purple"
                      key={selector.id}
                      value={selector.id}
                      onChange={handleCheckbox}
                      mb={lastElement ? 0 : 3}
                    >
                      <Text fontSize="sm">{selector.name}</Text>
                    </Checkbox>
                    {!lastElement && <Divider borderColor="gray.300" mb={3} />}
                  </>
                );
              })}
            </CheckboxGroup>
          </Stack>
        </Container>
        <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
          <Button
            onClick={() => {
              saveSkill(selectCheckboxes);
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
