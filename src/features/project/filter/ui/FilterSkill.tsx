import {
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

import { SearchInput } from '~/shared/ui/SearchInput';

export interface Selector {
  name: string;
  state: boolean;
}

interface FilterSkillProps {
  isVisible: boolean;
  changeVisible: (status: boolean) => void;
  state: Selector[];
  resetSpec: () => void;
  saveSpec: (spec: Selector[]) => void;
}

export const FilterSkill = (props: FilterSkillProps) => {
  const { isVisible, changeVisible, state, resetSpec, saveSpec } = props;
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const [skillSelector, setSkillSelectors] = useState<Selector[]>([]);

  useEffect(() => {
    setSkillSelectors([...state]);
  }, [state, isVisible, resetSpec]);

  const handleSetCheckbox = (skill: string) => {
    const newSkills = [...skillSelector];
    const index = newSkills.findIndex((selector) => selector.name === skill);
    newSkills[index] = { ...newSkills[index], state: !newSkills[index].state };
    setSkillSelectors(newSkills);
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
          <Stack>
            <CheckboxGroup variant="black" colorScheme="purple" value={['Новое 5']}>
              {skillSelector.map((selector) => (
                <Checkbox
                  colorScheme="purple"
                  key={selector.name}
                  onChange={(e) => {
                    handleSetCheckbox(e.target.value);
                  }}
                  value={selector.name}
                >
                  <Text fontSize="sm">{selector.name}</Text>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </Stack>
        </Container>
        <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
          <Button
            onClick={() => {
              saveSpec(skillSelector);
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
