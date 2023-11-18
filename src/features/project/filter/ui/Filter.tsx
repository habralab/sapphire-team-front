/* eslint-disable @typescript-eslint/no-floating-promises */
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
import { useQueryClient } from '@tanstack/react-query';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { deleteKeyFromStorage, saveInStorage } from '~/shared/lib/storageActions';
import { stringToServerDate } from '~/shared/lib/stringToServerDate';
import { Counter } from '~/shared/ui/Counter';
import { FilterSpecialization } from '~/shared/ui/FilterSpecialization';
import { SearchSelect, SelectOptions } from '~/shared/ui/SearchSelect';

interface FilterProps {
  userSpecs: string[];
  setUserSpecs: (userSpecs: string[]) => void;
  selectedItems: SelectOptions[];
  setSelectedItems: (selectedItems: SelectOptions[]) => void;
  filterDate: string;
  setFilterDate: (date: string) => void;
  totalItems?: number | null;
}

export const Filter = ({
  userSpecs,
  setUserSpecs,
  selectedItems,
  setSelectedItems,
  filterDate,
  setFilterDate,
  totalItems = 0,
}: FilterProps) => {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useIsMobile();

  const dateCount = filterDate.length ? 1 : 0;

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
              count={userSpecs.length + selectedItems.length + dateCount}
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
                  setUserSpecs([]);
                  setSelectedItems([]);
                  setFilterDate('');
                  deleteKeyFromStorage('skills');
                  deleteKeyFromStorage('specs');
                  deleteKeyFromStorage('date');
                  queryClient.invalidateQueries(['skills']);
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
                <FilterSpecialization userSpecs={userSpecs} setUserSpecs={setUserSpecs} />
              </Box>
              <Box>
                <Stack gap={1} mb={4}>
                  <Heading variant="h2" mb={3}>
                    Профессиональные навыки
                  </Heading>
                  <SearchSelect
                    isSearchFilter={true}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
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
                  value={filterDate.split('T', 1)[0]}
                  onChange={(e) => {
                    const formatDate = stringToServerDate(e.target.value);
                    setFilterDate(formatDate);
                    saveInStorage('date', formatDate);
                  }}
                />
              </Box>
            </Stack>
          </Container>
          <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0" mt="auto">
            <Button fontSize="sm" fontWeight="600" w="full" onClick={onClose}>
              Показать {!totalItems ? '0' : totalItems} проектов
            </Button>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};
