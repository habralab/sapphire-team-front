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
import _ from 'lodash';
import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';

import { FilterSkill } from './FilterSkill';
import { FilterSpecialization } from './FilterSpecialization';

const specState = [
  {
    title: 'Разработка',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Тестирование',
    child: [
      { name: 'Tilda', state: false },
      { name: 'Adobe after effect', state: false },
      { name: 'Новое 1', state: false },
      { name: 'Новое 2', state: false },
      { name: 'Новое 3', state: false },
      { name: 'Новое 4', state: false },
      { name: 'Новое 5', state: false },
    ],
  },
  {
    title: 'Аналитика',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Дизайн',
    child: [
      { name: 'Tilda', state: false },
      { name: 'Adobe after effect', state: false },
      { name: 'Новое 1', state: false },
      { name: 'Новое 2', state: false },
      { name: 'Новое 3', state: false },
      { name: 'Новое 4', state: false },
      { name: 'Новое 5', state: false },
    ],
  },
  {
    title: 'Менеджмент',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Информационнная безопасность',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Искусственный интеллект',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Поддержка',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Маркетинг',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Администрирование',
    child: [
      { name: 'Web-дизайн', state: false },
      { name: 'Прототипирование', state: false },
      { name: 'Графический дизайн', state: false },
      { name: 'HTML', state: false },
      { name: 'CSS', state: false },
      { name: 'Sketch', state: false },
    ],
  },
  {
    title: 'Контент',
    child: [
      { name: 'Tilda', state: false },
      { name: 'Adobe after effect', state: false },
      { name: 'Новое 1', state: false },
      { name: 'Новое 2', state: false },
      { name: 'Новое 3', state: false },
      { name: 'Новое 4', state: false },
      { name: 'Новое 5', state: false },
    ],
  },
  {
    title: 'HR',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Офис',
    child: [
      { name: 'Web-дизайн', state: false },
      { name: 'Прототипирование', state: false },
      { name: 'Графический дизайн', state: false },
      { name: 'HTML', state: false },
      { name: 'CSS', state: false },
      { name: 'Sketch', state: false },
    ],
  },
  {
    title: 'Зерокодинг',
    child: [
      { name: 'Figma', state: false },
      { name: 'UX', state: false },
      { name: 'UI', state: false },
      { name: 'Adobe Photoshop', state: false },
      { name: 'Дизайн интерфейсов', state: false },
      { name: 'Adobe Illustrator', state: false },
    ],
  },
  {
    title: 'Тестовая категория',
    child: [
      { name: 'Tilda', state: false },
      { name: 'Adobe after effect', state: false },
      { name: 'Новое 1', state: false },
      { name: 'Новое 2', state: false },
      { name: 'Новое 3', state: false },
      { name: 'Новое 4', state: false },
      { name: 'Новое 5', state: false },
    ],
  },
  {
    title: 'Тестовая категория 2',
    child: [
      { name: 'Web-дизайн', state: false },
      { name: 'Прототипирование', state: false },
      { name: 'Графический дизайн', state: false },
      { name: 'HTML', state: false },
      { name: 'CSS', state: false },
      { name: 'Sketch', state: false },
    ],
  },
];

export const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [specFilter, setSpecFilter] = useState(false);
  const isMobile = useIsMobile();
  const [specData, setSpecData] = useState(_.cloneDeep(specState));

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="filter"
        flexShrink="0"
        gap={2}
        padding={['0', '0', '4']}
        fontWeight="normal"
        icon={
          <>
            <Text hidden={isMobile}>Все фильтры</Text>
            <Icon as={IoOptions} fontSize="2xl" />
            <Counter count={4} float borderBg="bg" />
          </>
        }
      ></IconButton>

      <Modal onClose={onClose} size="full" isOpen={isOpen} blockScrollOnMount={false}>
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
              <Button variant="flat" fontSize="sm" fontWeight="500" colorScheme="purple">
                Сбросить
              </Button>
            </Flex>

            <Stack spacing={6}>
              <Box>
                <Heading variant="h2" mb={3}>
                  Специализация
                </Heading>
                <IconButton
                  onClick={() => {
                    setSpecFilter(true);
                  }}
                  aria-label="filter"
                  flexShrink="0"
                  gap={2}
                  padding={['0', '0', '4']}
                  fontWeight="normal"
                  icon={
                    <>
                      <Icon as={BsPlus} fontSize="2xl" />
                    </>
                  }
                />
                <FilterSpecialization
                  isVisible={specFilter}
                  changeVisible={setSpecFilter}
                  state={specData}
                  resetSpec={() => {
                    setSpecData(_.cloneDeep(specState));
                  }}
                  saveSpec={setSpecData}
                />
              </Box>
              <Box>
                <Heading variant="h2" mb={3}>
                  Профессиональные навыки
                </Heading>
                <FilterSkill
                  isVisible={specFilter}
                  changeVisible={setSpecFilter}
                  state={specData}
                  resetSpec={() => {
                    setSpecData(_.cloneDeep(specState));
                  }}
                  saveSpec={setSpecData}
                />
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
                />
              </Box>
            </Stack>
          </Container>
          <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
            <Button fontSize="sm" fontWeight="600" w="full">
              Показать 43 проекта
            </Button>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};
