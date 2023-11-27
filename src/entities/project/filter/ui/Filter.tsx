import {
  Button,
  IconButton,
  Modal,
  Text,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Icon,
  CloseButton,
  Heading,
  Flex,
  Box,
  Container,
  Stack,
  Input,
} from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { stringToServerDate } from '~/shared/lib/stringToServerDate';
import { Counter } from '~/shared/ui/Counter';
import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect } from '~/shared/ui/SearchSelect';

import { useFilterStore } from '../model';

interface FilterProps {
  totalItems?: number | null;
}

export const Filter = ({ totalItems = 0 }: FilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { filter, removeFilter, updateFilter } = useFilterStore();
  const isMobile = useIsMobile();

  return (
    <>
      <IconButton
        size="md"
        onClick={onOpen}
        aria-label="Все фильтры"
        flexShrink="0"
        gap={2}
        padding={isMobile ? 0 : 4}
        fontWeight="normal"
        icon={
          <>
            <Text hidden={isMobile}>Все фильтры</Text>
            <Icon as={IoOptions} fontSize="2xl" />
            <Counter
              count={filter.skills.length + filter.specs.length + (filter.date ? 1 : 0)}
              float
              borderBg="bg"
            />
          </>
        }
      ></IconButton>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg="bg" display="flex" alignItems="center">
          <Container maxW="md">
            <Flex alignItems="center" justifyContent="space-between" my={4}>
              <Flex alignItems="baseline">
                <CloseButton onClick={onClose} mr={2} />
                <Heading variant="h2" mb={0}>
                  Фильтры
                </Heading>
              </Flex>
              <Button
                variant="flat"
                fontSize="sm"
                fontWeight="500"
                colorScheme="purple"
                onClick={() => {
                  removeFilter();
                }}
              >
                Сбросить
              </Button>
            </Flex>

            <Stack spacing={6}>
              <Box>
                <Heading variant="h2" mb={3}>
                  Специализация
                </Heading>
                <FilterSpecialization
                  userSpecs={filter.specs}
                  setUserSpecs={(values) => {
                    updateFilter({ specs: values });
                  }}
                />
              </Box>
              <Box>
                <Stack gap={1} mb={3}>
                  <Heading variant="h2" mb={3}>
                    Профессиональные навыки
                  </Heading>
                  <SearchSelect
                    isSearchFilter={true}
                    selectedItems={filter.skills}
                    setSelectedItems={(values) => {
                      updateFilter({ skills: values });
                    }}
                  />
                </Stack>
              </Box>
              <Box>
                <Heading variant="h2">Дата начала проекта</Heading>
                <Input
                  variant="filled"
                  bg="white"
                  borderRadius="full"
                  fontSize="sm"
                  color="gray.500"
                  placeholder="Выберите дату"
                  type="date"
                  value={filter.date.split('T', 1)[0]}
                  onChange={(e) => {
                    const value = e.target.value;
                    updateFilter({ date: value ? stringToServerDate(value) : value });
                  }}
                />
              </Box>
            </Stack>
          </Container>
          <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0" mt="auto">
            <Button fontSize="sm" fontWeight="600" w="full" onClick={onClose}>
              Найдено позиций: {totalItems ?? 0}
            </Button>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};
